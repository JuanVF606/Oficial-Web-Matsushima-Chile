# Generated by Django 5.0.2 on 2024-02-14 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('actividades', '0006_alter_calendario_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='calendario',
            name='slug',
            field=models.SlugField(blank=True, editable=False, max_length=255, null=True, unique=True),
        ),
    ]
