from django import urls
from lab02 import encuesta
from django.contrib import admin
from django.urls import include, path
from CALCULADORA.views import suma, resta, multiplicar

urlpatterns = [
    path('encuesta/', include(encuesta.urls)),
    path('admin/', admin.site.urls),
    path('app/suma/<int:calculo_id>/<int:calculo2_id>',suma),
    path('app/resta/<int:calculo_id>/<int:calculo2_id>',resta),
    path('app/multiplica/<int:calculo_id>/<int:calculo2_id>',multiplicar),
]

