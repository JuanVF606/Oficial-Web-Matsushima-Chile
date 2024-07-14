from django.contrib import admin
from .models import BlackBelt

@admin.register(BlackBelt)
class BlackBeltAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'grade', 'zone', 'Dojo', 'is_active')
    search_fields = ('first_name', 'last_name', 'grade', 'Dojo', 'zone')
    list_filter = ('grade', 'Dojo', 'is_active', 'zone')
    readonly_fields = ('created_at', 'updated_at' , 'zone')
