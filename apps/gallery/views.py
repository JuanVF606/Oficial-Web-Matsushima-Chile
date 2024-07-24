from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View
from .models import Category, Gallery, MediaItem, Comment, Tag
from .serializers import CategorySerializer, GallerySerializer, MediaItemSerializer, CommentSerializer, TagSerializer

class CategoryListView(View):
    def get(self, request, *args, **kwargs):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return JsonResponse(serializer.data, safe=False)

class GalleryListView(View):
    def get(self, request, *args, **kwargs):
        galleries = Gallery.objects.all()
        serializer = GallerySerializer(galleries, many=True)
        return JsonResponse(serializer.data, safe=False)

class GalleryDetailView(View):
    def get(self, request, *args, **kwargs):
        gallery = get_object_or_404(Gallery, pk=kwargs['pk'])
        serializer = GallerySerializer(gallery)
        return JsonResponse(serializer.data)

class GalleryMediaItemsView(View):
    def get(self, request, *args, **kwargs):
        gallery = get_object_or_404(Gallery, pk=kwargs['pk'])
        media_items = gallery.media_items.all()
        serializer = MediaItemSerializer(media_items, many=True)
        return JsonResponse(serializer.data, safe=False)

class MediaItemListView(View):
    def get(self, request, *args, **kwargs):
        media_items = MediaItem.objects.all()
        serializer = MediaItemSerializer(media_items, many=True)
        return JsonResponse(serializer.data, safe=False)

class MediaItemDetailView(View):
    def get(self, request, *args, **kwargs):
        media_item = get_object_or_404(MediaItem, pk=kwargs['pk'])
        serializer = MediaItemSerializer(media_item)
        return JsonResponse(serializer.data)

class MediaItemCommentsView(View):
    def get(self, request, *args, **kwargs):
        media_item = get_object_or_404(MediaItem, pk=kwargs['pk'])
        comments = media_item.comments.all()
        serializer = CommentSerializer(comments, many=True)
        return JsonResponse(serializer.data, safe=False)

class CommentListView(View):
    def get(self, request, *args, **kwargs):
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return JsonResponse(serializer.data, safe=False)

class TagListView(View):
    def get(self, request, *args, **kwargs):
        tags = Tag.objects.all()
        serializer = TagSerializer(tags, many=True)
        return JsonResponse(serializer.data, safe=False)
