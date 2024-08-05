
from rest_framework.views import APIView
from .models import Employer,Department,Employee
from rest_framework import viewsets,permissions
from rest_framework.response import Response
from django.http.response import JsonResponse,Http404
import json
from django.shortcuts import redirect

from .serializer import EmployerSerializer,EmployeeSerializer,DepartmentSerializer
from core import serializer
from django.contrib.auth import authenticate



# Create your views h

# class SearchView(APIView):
#     def get(self,request,name=None,role=None):
#         if name:
#             try:
#                 employee=Employee.objects.get(name=name)
#             except Employee.DoesNotExist():
#                 raise 
            
#             serializer=EmployeeSerializer(employee,many=True)
#         return JsonResponse(serializer.data,safe=False)
class SearchView(APIView):
    def get(self,request):
        query=request.GET.get('query')
        search_by=request.GET.get('search_by')
        if search_by=='name':
            employees=Employee.objects.filter(name__icontains=query)
        elif search_by=='role':
            
            employees=Employee.objects.filter(role__icontains=query)
        else:
            employees=Employee.objects.none()
        serializer=EmployeeSerializer(employees,many=True)
        return Response(serializer.data)

class LoginView(APIView):
    def post(self,request):
        username=request.data['username']
        password=request.data['password']
        user=authenticate(username=username,password=password,model=Employer)
        if user is not None:
            token=user.token
            return redirect(f'/employer-api/?token={token}')
        return Response({'error':'invalid credentials'})