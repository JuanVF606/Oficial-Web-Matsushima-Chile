from django.db import models
from apps.category.models import Category
import uuid
from django.conf import settings
User = settings.AUTH_USER_MODEL


def blog_thumbnail_directory(instance, filename):
    return 'gallery/{0}/{1}'.format(instance.title, filename)


# Modelo principal de la galería
class Gallery(models.Model):
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    title = models.CharField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.CASCADE, default=User)
    slug = models.SlugField(max_length=255, unique=True, default=uuid.uuid4, editable=False)
    thumbnail = models.ImageField(upload_to=blog_thumbnail_directory, blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)
    published = models.DateTimeField(auto_now_add=True)
    instructor_a_cargo = models.CharField(max_length=255, blank=True, null=True)
    status = models.CharField(max_length=10, choices=options, default='draft')
    link_drive = models.URLField(max_length=255, blank=True, null=True)
    objects = models.Manager()  # default manager
    postobjects = PostObjects()  # custom manager

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title + ' | ' + str(self.author) + ' | ' + str(self.published)

    def get_status(self):
        return self.status
