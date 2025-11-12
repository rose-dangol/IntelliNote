from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    bio = models.TextField(blank=True)
    avatar = models.ImageField(default='user-avatar/default.jpg', upload_to='user-avatar')

    def __str__(self):
        return self.user.username
