from rest_framework import serializers
from .models import Libro, Prestamo

class LibroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Libro
        field = '__all__'
class PrestamoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestamo
        field = '__all__'
