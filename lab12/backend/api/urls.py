from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('libros',views.libro),
    path('prestamo',views.Prestamo),
]