from django.urls import path
from .views import *

urlpatterns = [
    path('list', ListDojosView.as_view()),
    path('delete/<slug>', DeleteDojosView.as_view()), 
    path('create', CreateDojosView.as_view()),
    path('edit', EditDojosView.as_view()),  
    path('detail/<slug>',DojoDetailView.as_view()),
    path('author_list',AuthorDojoListView.as_view()),
    path('publish',PublishDojosView.as_view()),
    path('draft',DraftDojosView.as_view()),
    path("cargo-options",CargoOptionsView.as_view()),
    path("dojo-options",DojoOperationsView.as_view()),
    path("grado-options",GradoView.as_view()),
    path("zona-options",ZonaView.as_view()),
    path("branch-options",BranchView.as_view()),
    path("dir-options",DIRView.as_view()),
    
]

