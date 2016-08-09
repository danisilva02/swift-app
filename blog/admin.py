from django.contrib import admin

from .models import Category
from .models import Post
from .models import Banner1
from .models import Banner_home
from .models import videoHome

admin.site.register(Category)
admin.site.register(Post)
admin.site.register(Banner1)
admin.site.register(Banner_home)
admin.site.register(videoHome)

# Register your models here.
