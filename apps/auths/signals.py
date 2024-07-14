from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import UserAccount, UserProfile

@receiver(post_save, sender=UserAccount)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
    instance.profile.save()
