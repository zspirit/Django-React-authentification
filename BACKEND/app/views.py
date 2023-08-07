from django.shortcuts import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from .serializers import *
from .models import *
from rest_framework.decorators import api_view

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework import status


# //////////////// test method
def home(request):
    return HttpResponse("hello")

#  /////////////// login 
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        return token
 
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# ///////////////// register
@api_view(['POST'])
def register(request):
    user = User.objects.create_user(
                username=request.data['username'],
                email=request.data['email'],
                password=request.data['password']
            )
    user.is_active = True
    user.is_staff = True
    user.save()
    return Response("new user born")

# /////////////////// full crud authenticed using APIviews
@permission_classes([IsAuthenticated])
class APIViews(APIView):
    parser_class=(MultiPartParser,FormParser)
    def get(self, request):
        user= request.user
        serializer = TicketSerializer(user.ticket_set.all(), many=True)
        print(user.ticket_set.all())
        return Response(status=status.HTTP_200_OK, data=serializer.data)

    def post(self,request,*args,**kwargs):
        api_serializer=TicketSerializer(data=request.data, context={'user':request.user})
       
        if api_serializer.is_valid():
            api_serializer.save()
            return Response(api_serializer.data,status=status.HTTP_201_CREATED)
        else:
            print('error',api_serializer.errors)
            return Response(api_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk, format=None):
        snippet = Ticket.objects.get(pk=pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

  
        
       
