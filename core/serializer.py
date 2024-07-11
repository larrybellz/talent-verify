from rest_framework import serializers
from .models import Employer,Department,Employee



class EmployerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Employer
        fields='__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Employee
        fields='__all__'

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Department
        fields='__all__'
