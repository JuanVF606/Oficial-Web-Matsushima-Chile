from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from slugify import slugify
from .models import Calendario, ViewCount
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from apps.category.models import Category
from django.http import JsonResponse
from .serializers import PostSerializer, PostListSerializer
from .pagination import SmallSetPagination, AdminSetPagination
from .permissions import IsPostAuthorOrReadOnly,AuthorPermission
from django.db.models.query_utils import Q
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.parsers import MultiPartParser, FormParser

class BlogListView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        if Calendario.postobjects.all().exists():

            posts = Calendario.postobjects.all()

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error':'No posts found'}, status=status.HTTP_404_NOT_FOUND)


class ListPostsByCategoryView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        # Recuperar el slug de la categoría de los parámetros de consulta
        slug = request.query_params.get('slug')

        try:
            # Intentar recuperar el objeto de categoría correspondiente al slug proporcionado
            category = Category.objects.get(slug=slug)
        except ObjectDoesNotExist:
            # Si la categoría no existe, devolver una respuesta 404
            return Response({'error': 'Category not found'}, status=status.HTTP_404_NOT_FOUND)

        # Recuperar todas las publicaciones ordenadas por fecha de publicación
        posts = Calendario.postobjects.order_by('-published').all()

        # Filtrar las publicaciones por categoría y subcategorías si las hay
        filtered_posts = posts.filter(category=category)

        if category.children.exists():
            sub_categories = category.children.all()
            sub_categories_ids = [cat.id for cat in sub_categories]
            # Incluir también las publicaciones de las subcategorías
            filtered_posts |= posts.filter(category_id__in=sub_categories_ids)

        # Paginar las publicaciones filtradas
        paginator = SmallSetPagination()
        paginated_posts = paginator.paginate_queryset(filtered_posts, request)
        
        
        
        # Serializar las publicaciones paginadas
        serializer = PostListSerializer(paginated_posts, many=True)

        # Devolver una respuesta paginada
        return paginator.get_paginated_response({'posts': serializer.data})

class PostDetailView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, slug, format=None):
        if Calendario.objects.filter(slug=slug).exists():
            
            post = Calendario.objects.get(slug=slug)
            serializer = PostSerializer(post)

            address = request.META.get('HTTP_X_FORWARDED_FOR')
            if address:
                ip = address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')

            if not ViewCount.objects.filter(post=post, ip_address=ip):
                view = ViewCount(post=post,ip_address=ip)
                view.save()
                post.views += 1
                post.save()

            return Response({'post':serializer.data})
        else:
            return Response({'error':'Post doesnt exist'}, status=status.HTTP_404_NOT_FOUND)


class SearchBlogView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self,request, format=None):
        search_term = request.query_params.get('s')
        matches = Calendario.postobjects.filter(
            Q(title__icontains=search_term) |
            Q(description__icontains=search_term) |
            Q(content__icontains=search_term) |
            Q(category__name__icontains=search_term)
        )

        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(matches, request)

        serializer = PostListSerializer(results, many=True)
        return paginator.get_paginated_response({'filtered_posts': serializer.data})

class PopularBlogListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        # Obtener parámetros de consulta (minViews y limit)
        min_views = request.query_params.get('minViews', 1)  # Valor predeterminado de 2 si no se proporciona
        limit = request.query_params.get('limit', 2)  # Valor predeterminado de 10 si no se proporciona

        # Filtrar publicaciones por vistas mínimas
        posts = Calendario.postobjects.filter(views__gt=min_views).order_by('-views')

        # Paginar resultados
        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(posts, request)

        # Serializar y devolver respuesta paginada
        serializer = PostListSerializer(results, many=True)
        return paginator.get_paginated_response({'posts': serializer.data})


class RelatedPostsAPIView(APIView):
    def get(self, request, post_id, limit):
        # Obtén el post actual
        current_post = get_object_or_404(Calendario, id=post_id)

        # Filtra posts relacionados basados en la categoría del post actual
        related_posts = Calendario.objects.filter(category=current_post.category).exclude(id=post_id)[:limit]

        # Serializa los datos de los posts relacionados
        serializer = PostSerializer(related_posts, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

class AuthorBlogListView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    def get(self, request, format=None):

        user = self.request.user

        if Calendario.objects.filter(author=user).exists():

            posts = Calendario.objects.filter(author=user)

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error':'No posts found'}, status=status.HTTP_404_NOT_FOUND)


class EditBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    parser_classes = [MultiPartParser, FormParser]

    def put(self, request, format=None):
        user = self.request.user

        data = self.request.data
        slug = data['slug']

        print(data)
        
        post = Calendario.objects.get(slug=slug)

        if(data['title']):
            if not (data['title'] == 'undefined'):
                post.title = data['title']
                post.save()
        if(data['new_slug']):
            if not (data['new_slug'] == 'undefined'):
                post.slug = slugify(data['new_slug'])
                post.save()
        if(data['description']):
            if not (data['description'] == 'undefined'):
                post.description = data['description']
                post.save()
        if(data['category']):
            if not (data['category'] == 'undefined'):
                category_id = int(data['category'])
                category = Category.objects.get(id=category_id)
                post.category = category
                post.save()

        if(data['thumbnail']):
            if not (data['thumbnail'] == 'undefined'):
                post.thumbnail = data['thumbnail']
                post.save()

        return Response({'success': 'Post edited'})

class DraftBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    def put(self, request, format=None):
        data = self.request.data
        slug = data['slug']

        post = Calendario.objects.get(slug=slug)

        post.status = 'draft'
        post.save()

        return Response({'success': 'Post edited'})

class AdminBlogListView(APIView):
    permission_classes = (permissions.IsAdminUser,)
    def get(self, request, format=None):
        if Calendario.objects.all().exists():

            posts = Calendario.objects.all()

            paginator = AdminSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error':'No posts found'}, status=status.HTTP_404_NOT_FOUND)

class PublishBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    def put(self, request, format=None):
        data = self.request.data
        slug = data['slug']

        post = Calendario.objects.get(slug=slug)

        post.status = 'published'
        post.save()

        return Response({'success': 'Post edited'})

class DeleteBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    def delete(self, request, slug, format=None):
        
        post = Calendario.objects.get(slug=slug)

        post.delete()

        return Response({'success': 'Post edited'})

class CreateBlogPostView(APIView):
    permission_classes = (AuthorPermission, )
    def post(self, request, format=None):
        user = self.request.user
        Calendario.objects.create(author=user)

        return Response({'success': 'Post edited'})