
from django.urls import path, include

from account import views
from rest_framework.authtoken import views
from account.views import *

urlpatterns = [
    path("login/", views.obtain_auth_token, name='login'),
    path('register/',user_register_view,name='register'),
    path('logout/',user_logout,name='logout'),
    path('me/',current_user,name='current_user'),
    path('users/',list_users,name='list_user'),
    path('profile/', edit_profile, name='edit_profile'),
]
