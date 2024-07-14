from rest_framework import serializers
from .models import BlackBelt
from django.utils import timezone

class BlackBeltSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlackBelt
        fields = '__all__'

    def validate_obtained_date(self, value):
        if value > timezone.now().date():
            raise serializers.ValidationError("Obtained date cannot be in the future")
        return value
