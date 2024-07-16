from django.contrib import admin

# Register your models here.
from .models import Calendario

admin.site.site_header = 'Administración de Iko matsushima Chile'
admin.site.site_title = 'Agrega p elimina eventos, noticias y mas'
admin.site.index_title = 'Bienvenido a la administración de eventos'
admin.site.register(Calendario)
