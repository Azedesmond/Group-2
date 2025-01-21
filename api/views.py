from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Employee
from .serializers import EmployeeSerializer

# API view to list employees
class EmployeeList(APIView):
    def get(self, request):
        employees = Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# View to render index.html
def index(request):
    return render(request, 'index.html')
def employee(request):
    return render(request, 'employee.html')  
def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')
