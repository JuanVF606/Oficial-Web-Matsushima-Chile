from django.urls import path

from .views import *

urlpatterns = [
    path('list',BlogListView.as_view()),
    path('popular',PopularBlogListView.as_view()),
    path('by_category',ListPostsByCategoryView.as_view()),
    path('detail/<slug>',PostDetailView.as_view()),
    path('search',SearchBlogView.as_view()),
    path('posts-related/<str:category_slug>/', RelatedPostsView.as_view(), name='related-posts'),
    path('posts-related/<str:category_slug>/<str:exclude_slug>/', RelatedPostsView.as_view(), name='related-posts-exclude'),
    path('author_list',AuthorBlogListView.as_view()),
    path('edit',EditBlogPostView.as_view()),
    path('draft',DraftBlogPostView.as_view()),
    path('publish',PublishBlogPostView.as_view()),
    path('delete/<slug>',DeleteBlogPostView.as_view()),
    path('create',CreateBlogPostView.as_view()),
    path('admin/list',AdminListBlogView.as_view()),
    
]