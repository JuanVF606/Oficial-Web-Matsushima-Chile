from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from slugify import slugify
from .models import Post, ViewCount
from django.shortcuts import get_object_or_404
from apps.category.models import Category
from .serializers import PostSerializer, PostListSerializer
from .pagination import SmallSetPagination, AdminSetPagination
from .permissions import IsPostAuthorOrReadOnly,AuthorPermission
from django.db.models.query_utils import Q
from rest_framework.parsers import MultiPartParser, FormParser


class RelatedPostsView(generics.ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        category_slug = self.kwargs.get('category_slug')
        exclude_slug = self.kwargs.get('exclude_slug', None)
        
        queryset = Post.objects.filter(categories__slug=category_slug)
        
        if exclude_slug:
            queryset = queryset.exclude(slug=exclude_slug)
        
        return queryset

class BlogListView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        if Post.postobjects.all().exists():

            posts = Post.postobjects.all()

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error':'No posts found'}, status=status.HTTP_404_NOT_FOUND)


class ListPostsByCategoryView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        # Verificar si hay posts disponibles
        if Post.postobjects.all().exists():
            slug = request.query_params.get('slug')
            exclude_slug = request.query_params.get('exclude', None)  # Obtener el slug del post a excluir
            
            # Intentar obtener la categoría por slug
            try:
                category = Category.objects.get(slug=slug)
            except Category.DoesNotExist:
                return Response({'error': 'Categoría no encontrada'}, status=status.HTTP_404_NOT_FOUND)
            
            # Filtrar posts por la categoría
            posts = Post.postobjects.order_by('-published').all()

            # Si la categoría no tiene una categoría padre, significa que ella misma es una categoría padre
            if not Category.objects.filter(parent=category).exists():
                posts = posts.filter(category=category)
            else:
                sub_categories = Category.objects.filter(parent=category)
                filtered_categories = [category] + list(sub_categories)
                posts = posts.filter(category__in=filtered_categories)
            
            # Excluir el post especificado si el slug de exclusión es proporcionado
            if exclude_slug:
                posts = posts.exclude(slug=exclude_slug)
                
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)
            
            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_404_NOT_FOUND)
class PostDetailView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, slug, format=None):
        if Post.objects.filter(slug=slug).exists():
            
            post = Post.objects.get(slug=slug)
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

class lastPostView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        if Post.objects.all().exists():
            post = Post.objects.latest('published')
            serializer = PostSerializer(post)

            return Response({'post':serializer.data})
        else:
            return Response({'error':'No posts found'}, status=status.HTTP_404_NOT_FOUND)
class SearchBlogView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self,request, format=None):
        search_term = request.query_params.get('s')
        matches = Post.postobjects.filter(
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
        posts = Post.postobjects.filter(views__gt=min_views).order_by('-views')

        # Paginar resultados
        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(posts, request)

        # Serializar y devolver respuesta paginada
        serializer = PostListSerializer(results, many=True)
        return paginator.get_paginated_response({'posts': serializer.data})


class RelatedPostsAPIView(APIView):
    def get(self, request, post_id, limit):
        # Obtén el post actual
        current_post = get_object_or_404(Post, id=post_id)

        # Filtra posts relacionados basados en la categoría del post actual
        related_posts = Post.objects.filter(category=current_post.category).exclude(id=post_id)[:limit]

        # Serializa los datos de los posts relacionados
        serializer = PostSerializer(related_posts, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

class AuthorBlogListView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    def get(self, request, format=None):

        user = self.request.user

        if Post.objects.filter(author=user).exists():

            posts = Post.objects.filter(author=user)

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

        
        if not slug:
            return Response({'error': 'Slug not provided'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            post = Post.objects.get(slug=slug)
        except Post.DoesNotExist:
            return Response({'error': 'Post not found'}, status=status.HTTP_404_NOT_FOUND)

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
        if(data['time_read']):
            if not (data['time_read'] == 'undefined'):
                post.time_read = data['time_read']
                post.save()
        if(data['content']):
            if not (data['content'] == 'undefined'):
                post.content = data['content']
                post.save()

        if(data['category']):
            if not (data['category'] == 'undefined'):
                category_id = int(data['category'])
                category = Category.objects.get(id=category_id)
                post.category = category
                post.save()

        thumbnail = data.get('thumbnail', None)
        if thumbnail and not (thumbnail == 'undefined'):
            post.thumbnail = thumbnail
            post.save()
        uploaded_file = data.get('file', None)
        if uploaded_file and not (uploaded_file == 'undefined'):
            # Aquí puedes manejar el archivo, guardarlo, procesarlo, etc.
            # Ejemplo de cómo guardarlo en la carpeta de medios
            post.file = uploaded_file
            post.save()
        
            
        return Response({'success': 'Post edited'})

class DraftBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    def put(self, request, format=None):
        data = self.request.data
        slug = data['slug']

        post = Post.objects.get(slug=slug)

        post.status = 'draft'
        post.save()

        return Response({'success': 'Post edited'})


class PublishBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    def put(self, request, format=None):
        data = self.request.data
        slug = data['slug']

        post = Post.objects.get(slug=slug)

        post.status = 'published'
        post.save()

        return Response({'success': 'Post edited'})

class DeleteBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    def delete(self, request, slug, format=None):
        
        post = Post.objects.get(slug=slug)

        post.delete()

        return Response({'success': 'Post edited'})


class CreateBlogPostView(APIView):
    permission_classes = (AuthorPermission, )
    def post(self, request, format=None):
        user = self.request.user
        Post.objects.create(author=user)

        return Response({'success': 'Post edited'})

class AdminListBlogView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    def get(self, request, format=None):
        posts = Post.objects.all()

        paginator = AdminSetPagination()
        results = paginator.paginate_queryset(posts, request)
        serializer = PostListSerializer(results, many=True)

        return paginator.get_paginated_response({'posts': serializer.data})