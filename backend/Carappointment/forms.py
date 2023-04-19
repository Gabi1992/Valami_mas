from django import forms
from django.forms import ModelForm
from .models import Megrendelo

class MegrendeloForm(ModelForm):
    class Meta:
        model = Megrendelo
        fields = ('nev','telefonszam','email','szolgaltatas','auto')
        