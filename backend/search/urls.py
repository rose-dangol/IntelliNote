from django.urls import path
from . import views

urlpatterns = [
    path('search/', views.web_search, name='web_search'),
]
