import profile

from django.contrib import admin

import account.models

# Register your models here.
admin.site.register(account.models.Profile)