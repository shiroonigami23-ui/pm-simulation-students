from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.utils.text import slugify

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True)
    def save(self, *args, **kwargs):
        if not self.slug: self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    def __str__(self): return self.name

class Post(models.Model):
    DRAFT, PUBLISHED = 'draft', 'published'
    STATUS = [(DRAFT,'Draft'),(PUBLISHED,'Published')]
    title = models.CharField(max_length=250)
    slug  = models.SlugField(unique=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    body   = models.TextField()
    category = models.ForeignKey(Category, null=True, blank=True, on_delete=models.SET_NULL)
    publish  = models.DateTimeField(default=timezone.now)
    created  = models.DateTimeField(auto_now_add=True)
    updated  = models.DateTimeField(auto_now=True)
    status   = models.CharField(max_length=10, choices=STATUS, default=DRAFT)
    image    = models.ImageField(upload_to='posts/%Y/%m/', blank=True, null=True)
    class Meta: ordering=['-publish']
    def __str__(self): return self.title

class Comment(models.Model):
    post   = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    body   = models.TextField()
    created= models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=True)
    class Meta: ordering=['created']
    def __str__(self): return f'{self.author} on {self.post}'
