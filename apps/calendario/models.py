from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from apps.auths.models import UserAccount

class Event(models.Model):
    CATEGORY_CHOICES = [
        ('seminar', 'Seminario'),
        ('exam', 'Examen de Grado'),
        ('tournament', 'Torneos'),
    ]

    name = models.CharField(max_length=200)
    author = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    description = models.TextField(blank=True)
    location = models.CharField(max_length=255)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    organizer = models.CharField(max_length=200)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Event'
        verbose_name_plural = 'Events'
        ordering = ['start_time']

    def __str__(self):
        return self.name

    def clean(self):
        # Ensure the end time is after the start time
        if self.end_time <= self.start_time:
            raise ValidationError(_('End time must be after start time'))
        
        # Ensure the event is not scheduled in the past
        if self.start_time < timezone.now():
            raise ValidationError(_('Start time cannot be in the past'))

    def get_duration(self):
        # Return the duration of the event
        return self.end_time - self.start_time

    def save(self, *args, **kwargs):
        # Custom save method to perform additional actions
        self.clean()  # Validate the model before saving
        super().save(*args, **kwargs)

    @property
    def is_upcoming(self):
        # Check if the event is in the future
        return self.start_time > timezone.now()

    @property
    def is_ongoing(self):
        # Check if the event is currently happening
        now = timezone.now()
        return self.start_time <= now <= self.end_time

    @property
    def is_past(self):
        # Check if the event has ended
        return self.end_time < timezone.now()
