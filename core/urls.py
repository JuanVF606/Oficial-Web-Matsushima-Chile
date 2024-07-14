from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.conf import settings
urlpatterns = [
    #auth routes
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    
    #api routes
    path('api/category/', include('apps.categories.urls')),
    
    path('admin/', admin.site.urls),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Ruta para capturar todas las demás rutas y dirigirlas a una plantilla HTML
urlpatterns += [
    path('', TemplateView.as_view(template_name='index.html')),
]

