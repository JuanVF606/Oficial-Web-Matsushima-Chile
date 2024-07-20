from django.urls import path
from .views import GalleryListView, GalleryDetailView, GalleryCreateView, GalleryUpdateView, GalleryDeleteView

urlpatterns = [
    path('galleries/', GalleryListView.as_view(), name='gallery-list'),
    path('galleries/<slug:slug>/', GalleryDetailView.as_view(), name='gallery-detail'),
    path('galleries/create/', GalleryCreateView.as_view(), name='gallery-create'),
    path('galleries/update/<slug:slug>/', GalleryUpdateView.as_view(), name='gallery-update'),
    path('galleries/delete/<slug:slug>/', GalleryDeleteView.as_view(), name='gallery-delete'),
]
