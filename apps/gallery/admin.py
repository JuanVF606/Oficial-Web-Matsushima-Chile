from django.contrib import admin
from .models import Gallery, MediaItem, Comment, Tag

@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'created_at', 'updated_at', 'created_by')
    search_fields = ('name', 'description')
    list_filter = ('created_at', 'updated_at', 'categories', 'tags')
    filter_horizontal = ('categories', 'tags')
    prepopulated_fields = {'slug': ('name',)}
    readonly_fields = ('created_at', 'updated_at')

@admin.register(MediaItem)
class MediaItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'media_type', 'gallery', 'uploaded_at', 'views')
    search_fields = ('title', 'description', 'gallery__name')
    list_filter = ('media_type', 'uploaded_at', 'gallery')
    readonly_fields = ('uploaded_at', 'views')
    filter_horizontal = ('tags',)

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'media_item', 'content', 'created_at')
    search_fields = ('user__username', 'media_item__title', 'content')
    list_filter = ('created_at', 'media_item')
    readonly_fields = ('created_at',)

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)
