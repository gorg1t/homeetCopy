from django.db import models

class FormData(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    gender = models.CharField(max_length=255)
    tg = models.CharField(max_length=255)
    tel = models.CharField(max_length=255)
    about = models.CharField(max_length=2000)
    other = models.CharField(max_length=255)
    objects = models.Manager()