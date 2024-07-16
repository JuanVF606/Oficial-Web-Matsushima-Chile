from rest_framework.views import APIView, View
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.parsers import MultiPartParser, FormParser
from django.shortcuts import get_object_or_404
from .models import Dojos
from .serializers import *
from .pagination import SmallSetPagination 
from .permissions	import AuthorPermission, IsDojoAuthorOrReadOnly
from django.utils.text import slugify
from django.http import JsonResponse

class ListDojosView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        dojos = Dojos.objects.all()
        serializer = DojosSerializer(dojos, many=True)
        return Response({'dojo': serializer.data})

class DeleteDojosView(APIView):
    permission_classes = (IsDojoAuthorOrReadOnly, )
    def delete(self, request, slug, format=None):
        
        post = Dojos.objects.get(slug=slug)

        post.delete()

        return Response({'success': 'Post edited'})

class CreateDojosView(APIView):
    permission_classes = (AuthorPermission, )

    def post(self, request, format=None):
        user = self.request.user
        new_post = Dojos(author=user)
        new_post.save()  # Guardar el nuevo post

        return Response({'success': 'Dojo created'}, status=status.HTTP_201_CREATED)


class EditDojosView(APIView):
    permission_classes = (IsDojoAuthorOrReadOnly, )
    parser_classes = [MultiPartParser, FormParser]

    def put(self, request, format=None):
        user = self.request.user
        data = self.request.data
        slug = data.get('slug', None)

        if not slug:
            return Response({'error': 'Slug not provided'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            dojo = Dojos.objects.get(slug=slug, author=user)
        except Dojos.DoesNotExist:
            return Response({'error': 'Instructor not found or unauthorized'}, status=status.HTTP_404_NOT_FOUND)

        if(data["full_name"]):
            if not data["full_name"] == 'undefined':
                dojo.full_name = data["full_name"]
                dojo.save()
        if(data['new_slug']):
            if not (data['new_slug'] == 'undefined'):
                dojo.slug = slugify(data['new_slug'])
                dojo.save()
        if(data["dojo_name"]):
            if not data["dojo_name"] == 'undefined':
                dojo.dojo_name = data["dojo_name"]
                dojo.save()
        if(data["location"]):
            if not data["location"] == 'undefined':
                dojo.location = data["location"]
                dojo.save()
        if(data["cargo"]):
            if not data["cargo"] == 'undefined':
                dojo.cargo = data["cargo"]
                dojo.save()
        if(data["grado"]):
            if not data["grado"] == 'undefined':
                dojo.grado = data["grado"]
                dojo.save()
        if(data["zona"]):
            if not data["zona"] == 'undefined':
                dojo.zona = data["zona"]
                dojo.save()
        if(data["is_branch_chief"]):
            if not data["is_branch_chief"] == 'undefined':
                dojo.is_branch_chief = data["is_branch_chief"]
                dojo.save()
        if(data["is_dojoOperator"]):
            if not data["is_dojoOperator"] == 'undefined':
                dojo.is_dojoOperator = data["is_dojoOperator"]
                dojo.save()
        if(data["is_Director"]):
            if not data["is_Director"] == 'undefined':
                dojo.is_Director = data["is_Director"]
                dojo.save()
        
        profile_image = data.get('profile_image', None)
        if profile_image and not (profile_image == 'undefined'):
            dojo    .profile_image = profile_image
            dojo.save()
      
        response_data = {'success': 'Post edited'}
        response = JsonResponse(response_data)

        # Configuraci贸n de encabezados para evitar el almacenamiento en cach茅
        response['Cache-Control'] = 'no-cache, no-store, must-revalidate'
        response['Pragma'] = 'no-cache'
        response['Expires'] = '0'

        return response
        
class DraftDojosView(APIView):
    permission_classes = (IsDojoAuthorOrReadOnly, )
    def put(self, request, format=None):
        data = self.request.data
        slug = data['slug']

        post = Dojos.objects.get(slug=slug)

        post.status = 'draft'
        post.save()

        return Response({'success': 'Post edited'})

class CargoOptionsView(View):
    def get(self, request, *args, **kwargs):
        cargo_options = [choice[0] for choice in Dojos.CARGO_CHOICES]
        return JsonResponse({'cargoOptions': cargo_options})

class DojoOperationsView(APIView):
   def get(self, request, *args, **kwargs):
        cargo_options = [choice[0] for choice in Dojos.OP_CHOICES]
        return JsonResponse({'OpOptions': cargo_options})

class GradoView(APIView):
    def get(self, request, *args, **kwargs):
        dojos = Dojos.objects.all()
        DoP_options = [choice[0] for choice in Dojos.GRADO_CHOICES]
        return JsonResponse({'GradOptions': DoP_options})
        
class ZonaView(APIView):
    def get(self, request, *args, **kwargs):
        location_choices = [choice[0] for choice in Dojos.ZONA_CHOICES]

        return JsonResponse({'locationOptions': location_choices})
 
class BranchView(APIView):
    def get(self, request, *args, **kwargs):
        dojos = Dojos.objects.all()
        location_choices = [choice[0] for choice in Dojos.BRANCH_CHOICES]
        return JsonResponse({'BrOptions': location_choices})
    
class DIRView(APIView):
    def get(self, request, *args, **kwargs):
        dojos = Dojos.objects.all()
        location_choices = [choice[0] for choice in Dojos.DIR_CHOICES]
        return JsonResponse({'DirOptions': location_choices})


class PublishDojosView(APIView):
    permission_classes = (IsDojoAuthorOrReadOnly, )
    def put(self, request, format=None):
        data = self.request.data
        slug = data['slug']

        post = Dojos.objects.get(slug=slug)

        post.status = 'published'
        post.save()

        return Response({'success': 'Post edited'})

class DojoDetailView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, slug, format=None):  
        dojo = get_object_or_404(Dojos, slug=slug) 
        serializer = DojosSerializer(dojo)
        return Response({'posts': serializer.data})

class AuthorDojoListView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    def get(self, request, format=None):

        user = self.request.user

        if Dojos.objects.filter(author=user).exists():

            posts = Dojos.objects.filter(author=user)

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = DojosSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error':'No posts found'}, status=status.HTTP_404_NOT_FOUND)