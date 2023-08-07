from rest_framework.test import APIClient
from django.urls import reverse
from rest_framework import status
from .models import Ticket

class TestListCreateTickets(APIClient):
    def authenticate(self):
        self.client.post(reverse('register', {
            'username':'username', 'email':'email@gmail.com', 'password': 'password'
        }))
        response = self.client.post(reverse('login'), {
            'email':'email@gmail.com',
            'password':'password'
        })
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {response.data['token']}")


    def test_create_ticket_with_no_auth(self):
        sample_ticket = {'desc':'lorem ipsom', 'priority':'1'}
        response = self.client.post(reverse('ticket'), sample_ticket)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_create_ticket_with_auth(self):
        previous_tickets_count = Ticket.objects.all().count()
        self.authenticate()
        sample_ticket = {'desc':'lorem ipsom', 'priority':'1'}
        response = self.client.post(reverse('ticket'), sample_ticket)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Ticket.objects.all().count(), previous_tickets_count+1)
