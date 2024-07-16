from rest_framework import serializers
from .models import Dojos

class InstructorSerializer(serializers.ModelSerializer):
    get_status = serializers.CharField(source='status')
    class Meta:
        model = Dojos
        fields = ['id',                     
                  'full_name', 
                  'cargo',
                  "slug",
                  'grado',
                  'zona', 
                  'profile_image', 
                  'location', 
                  'dojo_name', 
                  'is_branch_chief',
                  'is_dojoOperator',
                  'is_Director',
                  'status',
                  'get_status'
                  ]
   
    
    
class DojosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dojos
        fields = [
            'id',
            'full_name',
            'cargo',
            'slug',
            'author',
            'grado',
            'zona',
            'profile_image',
            'location',
            'dojo_name',
            'is_branch_chief',
            'is_dojoOperator',
            'is_Director',
            'status',
            ]