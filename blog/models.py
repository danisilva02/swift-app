from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Category(models.Model):
      name = models.CharField(max_length=255)

      def __str__(self):
          return self.name
        
class Post(models.Model):
    category = models.ForeignKey(Category)
    name = models.CharField(max_length=255)
    content = models.TextField()
    STATUS_CHOICES = (
        ('Draft', 'Draft'),
        ('Published', 'Published'),
    )
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Draft')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Banner1(models.Model):
      name = models.CharField(max_length=255)
      desc = models.CharField(max_length=255)
      color = models.CharField(max_length=100)
      STATUS_CHOICES = (
          ('Draft', 'Draft'),
          ('Published', 'Published'),
      )
      status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Draft')
      created_at = models.DateTimeField(auto_now_add=True)

      def __str__(self):
          return self.name


class Banner_home(models.Model):
    name = models.CharField(max_length=255)
    desc = models.CharField(max_length=255)
    color = models.CharField(max_length=100)
    STATUS_CHOICES = (
        ('Draft', 'Draft'),
        ('Published', 'Published'),
    )
    image = models.ImageField(
        upload_to='app/images', verbose_name='Imagem', null=True, blank=True
    )
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Draft')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class videoHome(models.Model):
    name = models.CharField(max_length=255)
    desc = models.CharField(max_length=255)
    url = models.CharField(max_length=255)
    STATUS_CHOICES = (
        ('Draft', 'Draft'),
        ('Published', 'Published'),
    )
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Draft')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name