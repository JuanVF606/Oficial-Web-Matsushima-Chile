from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from slugify import slugify
from .models import Gallery
from django.shortcuts import get_object_or_404
from apps.category.models import Category
from .serializers import PostSerializer, PostListSerializer
from .pagination import SmallSetPagination, AdminSetPagination
from .permissions import IsPostAuthorOrReadOnly,AuthorPermission
from django.db.models.query_utils import Q
from rest_framework.parsers import MultiPartParser, FormParser

class GalleryListView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        if Gallery.postobjects.all().exists():

            posts = Gallery.postobjects.all()

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error':'No posts found'}, status=status.HTTP_404_NOT_FOUND)


class ListPostsByCategoryView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        if Gallery.postobjects.all().exists():

            slug = request.query_params.get('slug')
            category = Category.objects.get(slug=slug)
            
            posts = Gallery.postobjects.order_by('-published').all()

        # # Si la categoría tiene un padre, filtrar sólo por esta categoría y no por el padre también
        # if category.parent:
        #     posts = posts.filter(category=category)

        # # Si la categoría no tiene una categoría padre, significa que ella misma es una categoría padre
        # else: 

            #Filtrar categoria sola
            if not Category.objects.filter(parent=category).exists():
                posts = posts.filter(category=category)
            # Si esta categoría padre tiene hijos, filtrar por la categoría padre y sus hijos
            else:
                sub_categories = Category.objects.filter(parent=category)
                
                filtered_categories = [category]

                for cat in sub_categories:
                    filtered_categories.append(cat)

                filtered_categories = tuple(filtered_categories)

                posts = posts.filter(category__in=filtered_categories)
                    
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error':'No posts found'}, status=status.HTTP_404_NOT_FOUND)


class AuthorGalleryListView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    def get(self, request, format=None):

        user = self.request.user

        if Gallery.objects.filter(author=user).exists():

            posts = Gallery.objects.filter(author=user)

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error':'No posts found'}, status=status.HTTP_404_NOT_FOUND)


    
    permission_classes = (IsPostAuthorOrReadOnly, )
    parser_classes = [MultiPartParser, FormParser]

    def put(self, request, format=None):
        user = self.request.user

        data = self.request.data
        slug = data['slug']

        
        if not slug:
            return Response({'error': 'Slug not provided'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            post = Gallery.objects.get(slug=slug)
        except Gallery.DoesNotExist:
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

class DraftGalleryPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    def put(self, request, format=None):
        data = self.request.data
        slug = data['slug']

        post = Gallery.objects.get(slug=slug)

        post.status = 'draft'
        post.save()

        return Response({'success': 'Post edited'})


class PublishGalleryPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    def put(self, request, format=None):
        data = self.request.data
        slug = data['slug']

        post = Gallery.objects.get(slug=slug)

        post.status = 'published'
        post.save()

        return Response({'success': 'Post edited'})

class DeleteGalleryPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    def delete(self, request, slug, format=None):
        
        post = Gallery.objects.get(slug=slug)

        post.delete()

        return Response({'success': 'Post edited'})


class CreateGalleryPostView(APIView):
    permission_classes = (AuthorPermission, )
    def post(self, request, format=None):
        user = self.request.user
        Gallery.objects.create(author=user)

        return Response({'success': 'Post edited'})

class AdminListGalleryView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    def get(self, request, format=None):
        posts = Gallery.objects.all()

        paginator = AdminSetPagination()
        results = paginator.paginate_queryset(posts, request)
        serializer = PostListSerializer(results, many=True)

        return paginator.get_paginated_response({'posts': serializer.data})