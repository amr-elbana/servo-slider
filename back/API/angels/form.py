from django import forms
from .models import Angels

class angel_form(forms.ModelForm):
    class Meta:
        model = Angels
        fields = ['first_joint' , 'second_joint' , 'third_joint' , 'fourth_joint' , 'fifth_joint' , 'sixth_joint']
        labels = {
            'first_joint' : 'test'
        }