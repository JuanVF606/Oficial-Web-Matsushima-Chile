from django.urls import path
from .views import (
    CategoryListView,
    GalleryListView,
    GalleryDetailView,
    GalleryMediaItemsView,
    MediaItemListView,
    MediaItemDetailView,
    MediaItemCommentsView,
    CommentListView,
    TagListView
)

urlpatterns = [
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('galleries/', GalleryListView.as_view(), name='gallery-list'),
    path('galleries/<int:pk>/', GalleryDetailView.as_view(), name='gallery-detail'),
    path('galleries/<int:pk>/media-items/', GalleryMediaItemsView.as_view(), name='gallery-media-items'),
    path('media-items/', MediaItemListView.as_view(), name='mediaitem-list'),
    path('media-items/<int:pk>/', MediaItemDetailView.as_view(), name='mediaitem-detail'),
    path('media-items/<int:pk>/comments/', MediaItemCommentsView.as_view(), name='mediaitem-comments'),
    path('comments/', CommentListView.as_view(), name='comment-list'),
    path('tags/', TagListView.as_view(), name='tag-list'),
]
