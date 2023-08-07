from django.urls import path
from . import views
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('', views.home),
    path('ticket',views.APIViews.as_view()),
    path('ticket/<int:pk>/', views.APIViews.as_view()),
    path('login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register', views.register),

]

urlpatterns = format_suffix_patterns(urlpatterns)

