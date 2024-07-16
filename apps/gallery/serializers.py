from rest_framework import serializers
from .models import *
from apps.category.serializers import CategorySerializer

class PostSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    get_status=serializers.CharField(source='status')
    class Meta: 
        model=Gallery
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'published',
            "instructor_a_cargo",
            "date",
            "link_drive",
            'category',
            'status',
            'get_status'
        ]

class PostListSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    class Meta: 
        model=Gallery
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            "instructor_a_cargo",
            "date",
            "link_drive",
            'published',
            'category',
            'status'
        ]