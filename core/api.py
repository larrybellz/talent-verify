from .models import Employer,Department,Employee
from rest_framework import viewsets,permissions
from rest_framework.views import APIView
from django.http.response import JsonResponse,Http404
import json
from rest_framework.response import Response

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
    def get_employee(self,pk):
            try:
                employee=Employee.objects.get(id=pk)
                return employee
            except Employee.DoesNotExist():
                raise Http404
            
    
    def get(self,request,pk=None):
        if pk:
            data=self.get_employee(pk)
            serializer=EmployeeSerializer(data)
        else:

            employee=Employee.objects.all()
            serializer=EmployeeSerializer(employee,many=True)
        return JsonResponse(serializer.data,safe=False)


class DepartmentApi(APIView):
    def get(self,request):
        department=Department.objects.all()
        serializer=DepartmentSerializer(department,many=True)
        return JsonResponse(serializer.data,safe=False)