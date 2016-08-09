from django.http import HttpResponse
from django.shortcuts import render
from blog.models import Category
from blog.models import Post
from blog.models import Banner_home
from blog.models import videoHome

# Create your views here.

def home(request):

    categories = Category.objects.all()
    post = Post.objects.all()
    banner = Banner_home.objects.all()
    video =  videoHome.objects.all()
    
    context = {
        
        'post': post,
        'Categories' : categories,
        'banner' : banner,
        'video' : video,
        
    }
    
    #Category.objects.create(name="Python");
    
    return render(request, 'blog/blog.html', context)

def filter_por_categoria(request, id):

    categories = Category.objects.all()
    categoriesSelect = Category.objects.filter(id=id)
    post = Post.objects.filter(category_id = id)
    banner = Banner_home.objects.all()
    context = {

        'post': post,
        'Categories': categories,
        'banner': banner,
        'categoriesSelect' : categoriesSelect,

    }
    return render(request, 'blog/home.html', context)

def detalhe(request, id):

    categories = Category.objects.all()
    post = Post.objects.filter(id=id)
    banner = Banner_home.objects.all()
    context = {

        'post': post,
        'Categories': categories,
        'banner': banner,
        'coments': True,

    }
    return render(request, 'blog/blog-noticia.html', context)