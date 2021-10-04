
from django.contrib import admin
from django.urls import include,path

urlpatterns = [
    path('tienda/', include('tienda.urls')),
    path('admin/', admin.site.urls),
]

