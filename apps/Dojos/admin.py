from django.contrib import admin
from .models import Dojos
# Register your models here.
class Dojos_Admin(admin.ModelAdmin):
    list_display = ('slug', 'dojo_name', 'zona')
    list_display_links = ('slug', )
    list_per_page = 25
    
admin.site.register(Dojos,Dojos_Admin)