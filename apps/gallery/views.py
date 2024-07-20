from django.shortcuts import render, get_object_or_404
from django.views import View
from django.http import JsonResponse
from .models import Gallery, AdditionalItem
from django.core.serializers import serialize
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json

class GalleryListView(View):
    def get(self, request):
        galleries = Gallery.postobjects.all()
        data = serialize('json', galleries)
        return JsonResponse(data, safe=False)

class GalleryDetailView(View):
    print('GalleryDetailView')
    def get(self, request, slug):
        gallery = get_object_or_404(Gallery, slug=slug)
        additional_items = AdditionalItem.objects.filter(gallery=gallery)
        gallery_data = {
            'gallery': serialize('json', [gallery]),
            'additional_items': serialize('json', additional_items)
        }
        
        if request.status_code == 404:
            return JsonResponse({'message': 'Gallery not found'}, status=404)
        if request.status_code == 200:
            print('GalleryDetailView')
            return JsonResponse(gallery_data, safe=False)
        return JsonResponse(gallery_data, safe=False)

@method_decorator(csrf_exempt, name='dispatch')
class GalleryCreateView(View):
    def post(self, request):
        data = json.loads(request.body)
        gallery = Gallery.objects.create(
            title=data['title'],
            author_id=data['author'],
            thumbnail=data['thumbnail'],
            category_id=data['category'],
            instructor_a_cargo=data.get('instructor_a_cargo', ''),
            status=data.get('status', 'draft'),
            link_drive=data.get('link_drive', '')
        )
        additional_items_data = data.get('additional_items', [])
        for item in additional_items_data:
            AdditionalItem.objects.create(
                gallery=gallery,
                url=item['url'],
                is_video=item['is_video']
            )
        return JsonResponse({'message': 'Gallery created successfully', 'gallery': serialize('json', [gallery])}, status=201)

@method_decorator(csrf_exempt, name='dispatch')
class GalleryUpdateView(View):
    def post(self, request, slug):
        data = json.loads(request.body)
        gallery = get_object_or_404(Gallery, slug=slug)
        gallery.title = data.get('title', gallery.title)
        gallery.thumbnail = data.get('thumbnail', gallery.thumbnail)
        gallery.category_id = data.get('category', gallery.category_id)
        gallery.instructor_a_cargo = data.get('instructor_a_cargo', gallery.instructor_a_cargo)
        gallery.status = data.get('status', gallery.status)
        gallery.link_drive = data.get('link_drive', gallery.link_drive)
        gallery.save()
        
        AdditionalItem.objects.filter(gallery=gallery).delete()
        additional_items_data = data.get('additional_items', [])
        for item in additional_items_data:
            AdditionalItem.objects.create(
                gallery=gallery,
                url=item['url'],
                is_video=item['is_video']
            )
            
        return JsonResponse({'message': 'Gallery updated successfully', 'gallery': serialize('json', [gallery])}, status=200)

@method_decorator(csrf_exempt, name='dispatch')
class GalleryDeleteView(View):
    def delete(self, request, slug):
        gallery = get_object_or_404(Gallery, slug=slug)
        gallery.delete()
        return JsonResponse({'message': 'Gallery deleted successfully'}, status=200)
