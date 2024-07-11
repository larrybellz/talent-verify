from unicodedata import name
from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import User
from .models import Employer

class EmployerAuthBackend(ModelBackend):
    def authenticate(self, request, username=None , password= None,**kwags):
        try :
            user=Employer.objects.get(username=name)
            if user.check_password(password):
                return user
           
        except Employer.DoesNotExist:
            return None
    def get_user(self,user_id):
        try:
            return Employer.objects.get(pk=user_id)
        except Employer.DoesNotExist:
            return None

