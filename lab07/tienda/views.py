from django.shortcuts import get_object_or_404, render
from .models import Categoria,Producto
# Create your views here.
def index(request):
    product_list = Producto.objects.all()
    category_list = Categoria.objects.all()
    request.session["nombreTienda"]= "Tienda TECH"
    context ={
        "product_list":product_list,
        "category_list":category_list
    }
    return render(request,'index.html',context)
    
def producto(request,producto_id):
    producto=get_object_or_404(Producto,pk=producto_id)
    return render(request,'producto.html',{'producto':producto})

from tienda.carrito import Cart
def agregarCarrito(request,producto_id):
    objProducto = Producto.objects.get(id=producto_id)
    carritoProducto = Cart(request)
    carritoProducto.add(objProducto,1)
    print(request.session.get("cart"))
    return render(request,'carrito.html')

def eliminarProductoCarrito(request,producto_id):
    objProducto = Producto.objects.get(id=producto_id)
    carritoProducto = Cart(request)
    carritoProducto.remove(objProducto)
    print(request.session.get("cart"))
    return render(request,'carrito.html')

def limpiarCarrito(request):
    CarritoProducto = Cart(request)
    CarritoProducto.clear()
    print(request.session.get("cart"))
    return render(request,'carrito.html')

def carrito(request):
    print(request.session.get("cart"))
    return render(request,'carrito.html')
