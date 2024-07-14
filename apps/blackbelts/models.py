from django.db import models
from django.core.exceptions import ValidationError
from django.utils import timezone

class BlackBelt(models.Model):
    GRADE_CHOICES = [
        ('1st Dan', '1st Dan'),
        ('2nd Dan', '2nd Dan'),
        ('3rd Dan', '3rd Dan'),
        ('4th Dan', '4th Dan'),
        ('5th Dan', '5th Dan'),
        ('6th Dan', '6th Dan'),
        # Añade más grados según sea necesario
    ]
    ZONE_CHOICES = [
        ('Norte', 'Norte'),
        ('Centro', 'Centro'),
        ('Sur', 'Sur'),
    ]

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    phone_number = models.CharField(max_length=15, blank=True)
    grade = models.CharField(max_length=50, choices=GRADE_CHOICES)
    Dojo = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    zone = models.CharField(choices=ZONE_CHOICES, max_length=50, blank=True)

    class Meta:
        verbose_name = 'Black Belt'
        verbose_name_plural = 'Black Belts'
        ordering = ['first_name' , 'grade' , 'zone']

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.grade}"

    def clean(self):
        # Ensure the obtained date is not in the future
        if self.obtained_date > timezone.now().date():
            raise ValidationError("Obtained date cannot be in the future")

    def save(self, *args, **kwargs):
        # Custom save method to perform additional actions
        self.clean()  # Validate the model before saving
        super().save(*args, **kwargs)
