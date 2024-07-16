from django.urls import path

from .views import *

urlpatterns = [
    path('list',GalleryListView.as_view()),
    path('by_category',ListPostsByCategoryView.as_view()),
    path('author_list',AuthorGalleryListView.as_view()),
    path('draft',DraftGalleryPostView.as_view()),
    path('publish',PublishGalleryPostView.as_view()),
    path('delete/<slug>',DeleteGalleryPostView.as_view()),
    path('create',CreateGalleryPostView.as_view()),
    path('admin/list',AdminListGalleryView.as_view()),
    
]