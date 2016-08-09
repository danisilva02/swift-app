from django.conf.urls import url
from blog import views
urlpatterns = [
    
    url(r'^$', views.home),
    url(r'^detalhe/(?P<id>\d+)/$', views.detalhe),
    url(r'^category/(?P<id>\d+)/$', views.filter_por_categoria),
    #url(r'^detalhe/(?P<object_id>\[\w-]+)/', views.detalhe)
      
]