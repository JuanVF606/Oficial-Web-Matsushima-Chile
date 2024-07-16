from rest_framework import serializers
from .models import *
from apps.category.serializers import CategorySerializer

class PostSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    get_status=serializers.CharField(source='status')
    class Meta: 
        model=Calendario
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            'published',
            'views',
            'category',
            'status',
            'get_status'
        ]

class PostListSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    class Meta: 
        model=Calendario
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            'published',
            'views',
            'category',
            'status'
        ]