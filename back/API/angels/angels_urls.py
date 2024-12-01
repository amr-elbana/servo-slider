from django.urls import path, include
from .views import index , angels_list , add_angle
urlpatterns = [

    path('index/' , index , name='index'),
    path('angles_list/' , angels_list , name = 'angels_list'),
    path('add_angle/' , add_angle , name = 'add_angle')

]