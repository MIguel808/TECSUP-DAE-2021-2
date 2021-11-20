from django.db import models
class Libro(models.Model):
    codigo = models.CharField(max_length=100)
    titulo = models.CharField(max_length=200)

    def __str__(self):
        return self.titulo

class Prestamo(models.Model):
    libro = models.ForeignKey(Libro,on_delete=models.RESTRICT)
    usuario = models.CharField(max_length=200, null=True)
    fechaPrestamo = models.DateTimeField(auto_now=True)
    fechaDevolucion = models.DateTimeField(null=True)
    def __str__(self):
        return self.usuario