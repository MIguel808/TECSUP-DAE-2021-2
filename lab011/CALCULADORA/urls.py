from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('/suma/<int:calculo_id>/<int:calculo2_id>', views.suma, name='suma'),
    path('/resta/<int:calculo_id>/<int:calculo2_id>', views.resta, name='resta'),
    path('/multiplica/<int:calculo_id>/<int:calculo2_id>', views.multiplicar, name='multiplica'),
]