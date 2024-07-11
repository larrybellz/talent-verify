from django.urls import path 
from rest_framework import routers
from .api import EmployeeApi,EmployerApi

from .api import EmployerViewset,DepartmentViewset


router=routers.DefaultRouter()
router.register('api/employer',EmployerViewset,'employer')
##router.register('api/employee',EmployeeViewset,'employee')
router.register('api/department',DepartmentViewset,'department')

urlpatterns=[
    
    path('employee-api/',EmployeeApi.as_view()),
    path('employer-api/',EmployerApi.as_view()),
    ]