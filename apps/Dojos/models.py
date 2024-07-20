from django.db import models
from django.core.exceptions import ValidationError
from django.conf import settings
import uuid
User = settings.AUTH_USER_MODEL

def blog_thumbnail_directory(instance, filename):
    return 'Dojos/{0}/{1}'.format(instance.full_name, filename)

class Dojos(models.Model):
    
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='status')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )
    
    ZONA_CHOICES = [
        ('Nacional', 'Nacional'),
        ('Norte', 'Norte'),
        ('Centro', 'Centro'),
        ('Sur', 'Sur'),
    ]
    CARGO_CHOICES = [
        ('Senpai', 'Senpai'),
        ('Sensei', 'Sensei'),
        ('Shihan', 'Shihan'),
    ]
    GRADO_CHOICES = [
        ('1er kyu', '1er kyu'),
        ('1er Dan', '1er Dan'),
        ('2do Dan', '2do Dan'),
        ('3er Dan', '3er Dan'),
        ('4to Dan', '4to Dan'),
        ('5to Dan', '5to Dan'),
        ('6to Dan', '6to Dan'),
    ]
    OP_CHOICES= [
        ('Si', 'Si'),
        ('No', 'No'),
    ]
    
    BRANCH_CHOICES= [
        ('Si', 'Si'),
        ('No', 'No'),
    ]
    
    DIR_CHOICES = [
       ('Si', 'Si'),
        ('No', 'No'),
    ]
    
    full_name = models.CharField(max_length=100, blank=True)
    cargo = models.CharField(max_length=100, choices=CARGO_CHOICES, blank=True)
    slug = models.SlugField(max_length=255, unique=True, default=uuid.uuid4,  editable=False)
    author =  models.ForeignKey(User, on_delete=models.CASCADE , null=True,  )
    grado = models.CharField(max_length=10, choices=GRADO_CHOICES, blank=True)
    zona = models.CharField(max_length=10, choices=ZONA_CHOICES, blank=True)
    profile_image = models.ImageField(upload_to=blog_thumbnail_directory, blank=True)
    location = models.CharField(max_length=255, blank=True)
    dojo_name = models.CharField(max_length=100, blank=True)
    is_branch_chief = models.CharField(max_length=10, choices=BRANCH_CHOICES , default="No",)
    is_dojoOperator = models.CharField(max_length=10, choices=OP_CHOICES , default="No")
    is_Director = models.CharField(max_length=10, choices=DIR_CHOICES , default="No")
    status =     models.CharField(max_length=10, choices=options, default='draft')
    objects =           models.Manager()  # default manager
    postobjects =       PostObjects()  # custom manager
    
    class Meta:
        ordering = ('status',)
    
    def __str__(self):
        return self.full_name or 'Untitled'  # Provide a default if 'title' is None
    
    def clean(self):
        # Verificar que el valor de 'grado' sea una opción válida
        if self.grado not in dict(self.GRADO_CHOICES).keys():
            raise ValidationError({'grado': 'Selecciona una opción válida para grado'})

        # Verificar que el valor de 'zona' sea una opción válida
        if self.zona not in dict(self.ZONA_CHOICES).keys():
            raise ValidationError({'zona': 'Selecciona una opción válida para zona'})

        # Verificar que el valor de 'cargo' sea una opción válida
        if self.cargo not in dict(self.CARGO_CHOICES).keys():
            raise ValidationError({'cargo': 'Selecciona una opción válida para cargo'})



   
    
    def get_status(self):
       status = self.status
       return status
    
