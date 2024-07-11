from .models import Employer,Department,Employee
from rest_framework import viewsets,permissions
from rest_framework.views import APIView
from django.http.response import JsonResponse
import json

from .serializer import EmployerSerializer,EmployeeSerializer,DepartmentSerializer

class EmployerViewset(viewsets.ModelViewSet):
    queryset=Employer.objects.all()
    perrmission_classes=[permissions.AllowAny]
    serializer_class=EmployerSerializer

"""
class EmployeeViewset(viewsets.ModelViewSet):
    queryset=Employee.objects.all()
    perrmission_classes=[permissions.AllowAny]
    serializer_class=EmployeeSerializer"""
class EmployerApi(APIView):
    def post(self,request):
        

        data=json.loads(request.body)
        
        serializer=EmployerSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('employee added succcesfully',safe=False)

        return JsonResponse('operation failed',safe=False)

class EmployeeApi(APIView):
    def post(self,request):
        

        data=json.loads(request.body)
        serializer=EmployeeSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('employee added succcesfully',safe=False)

        return JsonResponse('operation failled',safe=False)
    def get(self,request):
        employee=Employee.objects.all()
        serializer=EmployeeSerializer(employee,many=True)
        return JsonResponse(serializer.data,safe=False)



class DepartmentViewset(viewsets.ModelViewSet):
    queryset=Department.objects.all()
    perrmission_classes=[permissions.AllowAny]
    serializer_class=DepartmentSerializer