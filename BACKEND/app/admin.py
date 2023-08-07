from django.contrib import admin
from .models import Ticket

# connect between the table to the admin
admin.site.register(Ticket)


