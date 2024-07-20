# Generated by Django 5.0.7 on 2024-07-20 00:31

import apps.Dojos.models
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dojos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(blank=True, max_length=100)),
                ('cargo', models.CharField(blank=True, choices=[('Senpai', 'Senpai'), ('Sensei', 'Sensei'), ('Shihan', 'Shihan')], max_length=100)),
                ('slug', models.SlugField(default=uuid.uuid4, editable=False, max_length=255, unique=True)),
                ('grado', models.CharField(blank=True, choices=[('1er kyu', '1er kyu'), ('1er Dan', '1er Dan'), ('2do Dan', '2do Dan'), ('3er Dan', '3er Dan'), ('4to Dan', '4to Dan'), ('5to Dan', '5to Dan'), ('6to Dan', '6to Dan')], max_length=10)),
                ('zona', models.CharField(blank=True, choices=[('Nacional', 'Nacional'), ('Norte', 'Norte'), ('Centro', 'Centro'), ('Sur', 'Sur')], max_length=10)),
                ('profile_image', models.ImageField(blank=True, upload_to=apps.Dojos.models.blog_thumbnail_directory)),
                ('location', models.CharField(blank=True, max_length=255)),
                ('dojo_name', models.CharField(blank=True, max_length=100)),
                ('is_branch_chief', models.CharField(choices=[('Si', 'Si'), ('No', 'No')], default='No', max_length=10)),
                ('is_dojoOperator', models.CharField(choices=[('Si', 'Si'), ('No', 'No')], default='No', max_length=10)),
                ('is_Director', models.CharField(choices=[('Si', 'Si'), ('No', 'No')], default='No', max_length=10)),
                ('status', models.CharField(choices=[('draft', 'Draft'), ('published', 'Published')], default='draft', max_length=10)),
            ],
            options={
                'ordering': ('status',),
            },
        ),
    ]
