from django.shortcuts import render
from .models import Categoria,Producto
# Create your views here.
def index(request):
    product_list = Producto.objects.all()
    category_list = Categoria.objects.all()
    context ={
        "product_list":product_list,
        "category_list":category_list
    }
    return render(request,'index.html',context)
