from django.conf import settings
from django.db import models
from django.utils import timezone
from apps.category.models import Category
from django.utils.text import slugify

def blog_thumbnail_directory(instance, filename):
    return 'Gallery/{0}/{1}'.format(instance.name, filename)

class Gallery(models.Model):
    name = models.CharField(max_length=255)
    thumbnail = models.ImageField(upload_to=blog_thumbnail_directory, blank=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    description = models.TextField(blank=True, null=True)
    categories = models.ManyToManyField(Category, related_name='galleries', blank=True)
    tags = models.ManyToManyField('Tag', related_name='galleries', blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, related_name='galleries_created')
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.name

class MediaItem(models.Model):
    MEDIA_TYPE_CHOICES = [
        ('image', 'Image'),
        ('video', 'Video'),
    ]
    
    gallery = models.ForeignKey(Gallery, related_name='media_items', on_delete=models.CASCADE)
    media_type = models.CharField(max_length=10, choices=MEDIA_TYPE_CHOICES)
    file = models.FileField(upload_to='media/')
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    uploaded_at = models.DateTimeField(default=timezone.now)
    views = models.PositiveIntegerField(default=0)
    tags = models.ManyToManyField('Tag', related_name='media_items', blank=True)
    
    def __str__(self):
        return f"{self.title} ({self.media_type})"
    
    class Meta:
        ordering = ['-uploaded_at']

class Comment(models.Model):
    media_item = models.ForeignKey(MediaItem, related_name='comments', on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return f"Comment by {self.user} on {self.media_item.title}"
    
    class Meta:
        ordering = ['created_at']

class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)
    
    def __str__(self):
        return self.name
