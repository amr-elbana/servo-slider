from rest_framework import serializers
from .models import Angels
class Angels_serializers(serializers.ModelSerializer):
    class Meta:
        model   =   Angels
        fields  =     ['first_joint' , 'second_joint' , 'third_joint' , 'fourth_joint' , 'fifth_joint' , 'sixth_joint','created_at' , 'updated_at']
        

