from rest_framework import serializers
from .models import Category

class CategorySerializer(serializers.ModelSerializer):
    sub_categories = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ('id', 'name', 'slug', 'views', 'sub_categories')

    def get_sub_categories(self, obj):
        sub_categories = obj.children.all()
        return CategorySerializer(sub_categories, many=True).data
