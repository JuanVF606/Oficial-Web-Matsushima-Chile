from django.db import models
from django.core.validators import validate_ipv46_address
from django.db.models import Count

class Category(models.Model):
    class Meta:
        verbose_name = 'Categoría'
        verbose_name_plural = 'Categorías'
        indexes = [
            models.Index(fields=['slug']),
        ]

    name = models.CharField(
        max_length=255, 
        unique=True, 
        verbose_name='Nombre'
    )
    slug = models.SlugField(
        max_length=255, 
        unique=True, 
        verbose_name='Slug'
    )
    views = models.IntegerField(
        default=0, 
        blank=True, 
        verbose_name='Vistas'
    )
    parent = models.ForeignKey(
        'self', 
        related_name='children', 
        on_delete=models.CASCADE, 
        blank=True, 
        null=True, 
        verbose_name='Categoría padre'
    )

    def __str__(self):
        return self.name

    def get_view_count(self):
        views = self.category_view_count.aggregate(count=Count('id'))['count']
        return views


class ViewCount(models.Model):
    category = models.ForeignKey(
        Category, 
        related_name='category_view_count', 
        on_delete=models.CASCADE, 
        verbose_name='Categoría'
    )
    ip_address = models.CharField(
        max_length=255, 
        validators=[validate_ipv46_address], 
        verbose_name='Dirección IP'
    )

    def __str__(self):
        return self.ip_address
