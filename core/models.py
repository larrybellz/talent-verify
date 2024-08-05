import email
from django.db import models

from django.contrib.auth.models import AbstractUser,PermissionsMixin,Group

# Create your models here.
class Employer(AbstractUser,PermissionsMixin):
    
    company_name=models.CharField(max_length=200)
    date_of_registration=models.DateField(null=True,blank=True)
    registration_number=models.CharField(max_length=50,null=True,blank=True)
    company_address=models.CharField(max_length=500)
    token=models.CharField(max_length=250,blank=True,null=True)
   

 
class Department(models.Model):
    
    employer_id=models.ForeignKey(Employer,on_delete=models.CASCADE,null=True,blank=True)
    department_name=models.CharField(max_length=200)

    def __str__(self):
        return self.department_name
class Employee(models.Model):
    employer_id=models.ForeignKey(Employer,on_delete=models.CASCADE,null=True,blank=True)
    department_id=models.ForeignKey(Department,on_delete=models.CASCADE,null=True,blank=True)
    name=models.CharField(max_length=100)
    employee_contacts=models.CharField(max_length=500)
    role=models.CharField(max_length=500)
    duties=models.CharField(max_length=600)
    date_started=models.DateField(null=True,blank=True)
    date_left=models.DateField(null=True,blank=True)
    

    def __str__(self):
        return self.name 


    
