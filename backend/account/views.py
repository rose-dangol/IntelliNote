from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.response import Response

from account.serializers import UserRegisterSerializer


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
    user=request.user
    return Response({
        "username":user.username,
        "email":user.email,
        "role":"admin" if user.is_staff else "user"
    })