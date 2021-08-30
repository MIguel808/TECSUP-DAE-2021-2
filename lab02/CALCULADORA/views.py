from django.shortcuts import render
from django.http import HttpResponse
def index(request):
    return HttpResponse("Estas en la vista de la calculadora")
def suma(request,calculo_id, calculo2_id):
    Resul=calculo_id+calculo2_id
    return HttpResponse("La suma de %s + %s es = %s." %(calculo_id, calculo2_id, Resultado))
def resta(request,calculo_id, calculo2_id):
    Resul=calculo_id-calculo2_id
    return HttpResponse("La resta de %s - %s es = %s." %(calculo_id, calculo2_id, Resultado))
def multiplicar(request,calculo_id, calculo2_id):
    Resul=calculo_id*calculo2_id
    return HttpResponse("La multiplicacion de %s x %s es = %s." %(calculo_id, calculo2_id, Resultado))