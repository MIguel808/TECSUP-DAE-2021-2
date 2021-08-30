from django import urls
from lab02 import encuesta
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('encuesta/', include(encuesta.urls)),
    path('admin/', admin.site.urls),
]

