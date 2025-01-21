from django.urls import path
from .views import EmployeeList, index
from api import views  # Ensure both views are imported

urlpatterns = [
    path('employees/', EmployeeList.as_view(), name='employee-list'),  # API endpoint
    path('', index, name='index'),  # Root URL linked to index.html
    path('employee/', views.employee, name='employee'), 
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
]
