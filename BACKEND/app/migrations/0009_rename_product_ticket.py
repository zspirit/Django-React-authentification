# Generated by Django 4.0.6 on 2023-08-06 15:00

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('app', '0008_rename_price_product_priority'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Product',
            new_name='Ticket',
        ),
    ]
