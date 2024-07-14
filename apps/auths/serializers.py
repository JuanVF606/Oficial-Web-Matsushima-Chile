from rest_framework import serializers
from .models import UserAccount, UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['phone_number', 'address', 'birth_date', 'profile_picture', 'bio']


class UserAccountSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer()

    class Meta:
        model = UserAccount
        fields = ['email', 'first_name', 'last_name', 'is_active', 'is_staff', 'is_editor', 'created_at', 'updated_at', 'profile']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        user = UserAccount.objects.create(**validated_data)
        UserProfile.objects.create(user=user, **profile_data)
        return user

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile')
        profile = instance.profile

        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.is_active = validated_data.get('is_active', instance.is_active)
        instance.is_staff = validated_data.get('is_staff', instance.is_staff)
        instance.is_editor = validated_data.get('is_editor', instance.is_editor)
        instance.save()

        profile.phone_number = profile_data.get('phone_number', profile.phone_number)
        profile.address = profile_data.get('address', profile.address)
        profile.birth_date = profile_data.get('birth_date', profile.birth_date)
        profile.profile_picture = profile_data.get('profile_picture', profile.profile_picture)
        profile.bio = profile_data.get('bio', profile.bio)
        profile.save()

        return instance
