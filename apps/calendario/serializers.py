from rest_framework import serializers
from .models import Event
from django.utils import timezone

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

    def validate(self, data):
        # Ensure the end time is after the start time
        if data['end_time'] <= data['start_time']:
            raise serializers.ValidationError("End time must be after start time")
        
        # Ensure the event is not scheduled in the past
        if data['start_time'] < timezone.now():
            raise serializers.ValidationError("Start time cannot be in the past")
        
        return data
