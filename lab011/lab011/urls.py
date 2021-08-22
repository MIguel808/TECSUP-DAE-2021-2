"""lab011 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path,include
from django.http import HttpResponse
from CALCULADORA.views import suma, resta, multiplicar
def home(request):
    return HttpResponse("<h1>Hola Mundo</h1>")
urlpatterns = [
    path('',home),
    path('polls/',include('encuesta.urls')),
    path('app/',include('Calculos.urls')),
    path('app/suma/<int:calculo_id>/<int:calculo2_id>',suma),
    path('app/resta/<int:calculo_id>/<int:calculo2_id>',resta),
    path('app/multiplica/<int:calculo_id>/<int:calculo2_id>',multiplicar),
    path('admin/', admin.site.urls),
]