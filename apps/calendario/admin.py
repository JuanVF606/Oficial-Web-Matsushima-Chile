from django.contrib import admin
from .models import Event

class EventAdmin(admin.ModelAdmin):
    list_display = ('name','location', 'organizer', 'category' )

admin.site.register(Event, EventAdmin)