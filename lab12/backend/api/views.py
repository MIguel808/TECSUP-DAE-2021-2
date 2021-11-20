import re
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Libro, Prestamo
from .serializers import LibroSerializer, PrestamoSerializer

@api_view(['GET'])
def index(request):
    return Response({'mensaje':'Api rest de Prestamos'})
@api_view(['GET'])
def libro(request):
    listLibros=Libro.objects.all()
    serLibros=LibroSerializer(listLibros, many=True)
    return Response(serLibros.data)
@api_view(['GET','POST'])
def prestamo(request):
    if request.method == 'GET':
        listPrestamo=Prestamo.objects.all()
        serPrestamo=PrestamoSerializer(listPrestamo, many=True)
        return Response(serPrestamo.data)
    elif request.method=='POST':
        serPrestamo=PrestamoSerializer(data=request.data)
        if serPrestamo.is_valid():
            serPrestamo.save()
            return Response(serPrestamo)
        else:
            return Response(serPrestamo.errors)
@api_view({'GET','POST','DELETE'})
def prestamodetalle(request,prestamo_id):
    objPrestamo = Prestamo.objects.get(id=prestamo_id)
    if request.method == "GET":
        serPrestamo=PrestamoSerializer(objPrestamo)
        return Response(serPrestamo.data)
    elif request.method == 'PUT':
        serPrestamo= PrestamoSerializer(objPrestamo, data=request.data)
        if serPrestamo.is_valid():
            serPrestamo.save()
            return Response(serPrestamo.data)
        else:
            return Response(serPrestamo.errors)
    elif request.method == 'DELETE':
        objPrestamo.delete()
        return Response(status=204)
