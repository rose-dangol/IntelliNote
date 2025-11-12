from django.contrib.auth.models import User
from rest_framework import serializers

from account.models import Profile


class UserRegisterSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(style={'input':'password'}, write_only=True)
    class Meta:
        model = User
        fields = ('username','email','password','confirm_password')
        extra_kwargs = {'password':{'write_only':True}}

    def create(self, validated_data):   #remove confirm password ra password lai hash gareko
        validated_data.pop('confirm_password')
        password = validated_data.pop('password')
        user = User.objects.create_user(**validated_data)
        user.set_password(password)
        user.save()
        return user

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError("Password od not match")
        return attrs

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['bio','avatar']

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()
    date_joined = serializers.DateTimeField(format="%Y-%m-%d")
    role = serializers.SerializerMethodField()  # dynamically generate role

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role', 'date_joined','profile']

    def get_role(self, obj):
        return "admin" if obj.is_staff else "user"

