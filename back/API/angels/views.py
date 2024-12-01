from django.shortcuts import render
from django.http import HttpResponse , JsonResponse
from .serializers import Angels_serializers
from .models import Angels
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .form import angel_form
def index(request):
    return HttpResponse("hello")


@api_view(['GET' , 'POST'])
def angels_list(request):
    if request.method =='GET':
        angels      =   Angels.objects.latest('created_at')
        serialzer   =   Angels_serializers(angels)
        first       =   serialzer.data['first_joint']
        second      =   serialzer.data['second_joint']
        third       =   serialzer.data['third_joint']
        fourth      =   serialzer.data['fourth_joint']
        fifth       =   serialzer.data['fifth_joint']
        sixth       =   serialzer.data['sixth_joint']
        print(first , second , third , fourth , fifth , sixth)
        return JsonResponse(serialzer.data  , safe=False)
    if request.method =='POST':
        serialzer   =   Angels_serializers(data = request.data)
        if serialzer.is_valid():
            serialzer.save()
            return Response(serialzer.data , status=status.HTTP_201_CREATED)  
        


        
def add_angle(request):
    if request.method == 'POST':
        form = angel_form(request.POST)
        if form.is_valid():
            form.save()
            form = angel_form()
            context = {
                'form' : form
            }
            return render(request , 'angels/gui.html' , context)
    else:
        form = angel_form()
        context = {
            'form' : form
        }
        return render(request , 'angels/gui.html' , context )