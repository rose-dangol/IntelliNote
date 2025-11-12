from django.contrib.auth.models import User
from django.core.serializers import serialize
from rest_framework import status, viewsets
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.response import Response

from account.models import Profile
from account.serializers import UserRegisterSerializer, UserSerializer, ProfileSerializer


@api_view(['POST'])
def user_register_view(request):
    serializer = UserRegisterSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        user_instance=serializer.save()
        token, created= Token.objects.get_or_create(user=user_instance)
        # serializer.data['token']=token.key
        return Response({'token':token.key, **serializer.data}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def user_logout(request):
    # request.user.auth_token.delete()
    Token.objects.filter(user=request.user).delete()
    return Response("log out success.")

@api_view(['GET'])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def list_users(request):
    print(request.user)
    # if not request.user.is_staff:
    #     return Response({"detail":"Not authorized"}, status=403)
    users = User.objects.all()
    serializer = UserSerializer(users,many=True)
             # .values("id", "username", "email", "is_staff", "is_active"))
    return Response(serializer.data)

@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def edit_profile(request):
    profile = request.user.profile
    serializer=ProfileSerializer(profile, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        user_serializer = UserSerializer(request.user, context={'request':request})
        return Response(user_serializer)
    return Response(serializer.errors)