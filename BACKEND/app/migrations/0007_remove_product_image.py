# Generated by Django 4.0.6 on 2023-08-06 14:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_product_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='image',
        ),
    ]
