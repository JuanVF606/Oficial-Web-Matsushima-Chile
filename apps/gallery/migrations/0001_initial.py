# Generated by Django 5.0.7 on 2024-07-20 00:31

import apps.gallery.models
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AdditionalItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to=apps.gallery.models.blog_thumbnail_directory)),
                ('thumbnail2', models.ImageField(blank=True, null=True, upload_to=apps.gallery.models.blog_thumbnail_directory)),
                ('thumbnail3', models.ImageField(blank=True, null=True, upload_to=apps.gallery.models.blog_thumbnail_directory)),
                ('thumbnail4', models.ImageField(blank=True, null=True, upload_to=apps.gallery.models.blog_thumbnail_directory)),
                ('thumbnail5', models.ImageField(blank=True, null=True, upload_to=apps.gallery.models.blog_thumbnail_directory)),
                ('url', models.URLField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('slug', models.SlugField(default=uuid.uuid4, editable=False, max_length=255, unique=True)),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to=apps.gallery.models.blog_thumbnail_directory)),
                ('video', models.URLField(blank=True, max_length=255, null=True)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('published', models.DateTimeField(auto_now_add=True)),
                ('instructor_a_cargo', models.CharField(blank=True, max_length=255, null=True)),
                ('status', models.CharField(choices=[('draft', 'Draft'), ('published', 'Published')], default='draft', max_length=10)),
                ('link_drive', models.URLField(blank=True, max_length=255, null=True)),
            ],
            options={
                'ordering': ('-published',),
            },
        ),
    ]
