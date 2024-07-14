from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Category
from .serializers import CategorySerializer

class ListCategoriesView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        categories = Category.objects.prefetch_related('children').filter(parent__isnull=True)
        
        if categories.exists():
            serializer = CategorySerializer(categories, many=True)
            return Response({'categories': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No categories found'}, status=status.HTTP_404_NOT_FOUND)
