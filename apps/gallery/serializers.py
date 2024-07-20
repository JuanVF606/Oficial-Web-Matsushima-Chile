from rest_framework import serializers
from .models import *
from apps.category.serializers import CategorySerializer
class AdditionalItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdditionalItem
        fields = ('url', 'is_video')

class GallerySerializer(serializers.ModelSerializer):
    additional_items = AdditionalItemSerializer(many=True, read_only=True)

    class Meta:
        model = Gallery
        fields = (
            'id', 'title', 'author', 'slug', 'thumbnail', 'category',
            'date', 'published', 'instructor_a_cargo', 'status', 'link_drive',
            'additional_items'
        )