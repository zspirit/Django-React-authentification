from rest_framework import serializers
from .models import  *

#product model serializers
class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ("__all__")

    def create(self, validated_data):
        user = self.context['user']
        print(user)
        return Ticket.objects.create(**validated_data, user=user)

