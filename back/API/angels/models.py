from django.db import models

class Angels (models.Model):
        first_joint      =   models.DecimalField(decimal_places=2 , max_digits=5)
        second_joint     =   models.DecimalField(decimal_places=2 , max_digits=5)
        third_joint      =   models.DecimalField(decimal_places=2 , max_digits=5)
        fourth_joint     =   models.DecimalField(decimal_places=2 , max_digits=5)
        fifth_joint      =   models.DecimalField(decimal_places=2 , max_digits=5)
        sixth_joint      =   models.DecimalField(decimal_places=2 , max_digits=5)
        created_at       =   models.DateTimeField(auto_now_add=True)
        updated_at       =   models.DateTimeField(auto_now=True)