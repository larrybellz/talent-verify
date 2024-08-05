from django.urls import path 
from rest_framework import routers
from .api import EmployeeApi,EmployerApi
from .views import SearchView,LoginView
from .api import EmployerViewset,DepartmentApi


router=routers.DefaultRouter()
router.register('api/employer',EmployerViewset,'employer')
##router.register('api/employee',EmployeeViewset,'employee')
#router.register('api/department',DepartmentViewset,'department')

urlpatterns=[
    
    path('employee-api/',EmployeeApi.as_view()),
    path('employee/<int:pk>',EmployeeApi.as_view()),
    path('employer-api/',EmployerApi.as_view()),
    path('search/',SearchView.as_view()),
    path('login/',LoginView.as_view()),
    path('departments/',DepartmentApi.as_view()),
    path('employer-api/',EmployerApi.as_view(),name='success-url'),

    ]