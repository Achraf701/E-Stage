
from django.urls import path
from .views import index
#from api import urls
app_name = 'frontend'

urlpatterns = [
    path('', index , name = ''),
    path('join', index),
    path('create', index),
    path('room/<str:roomCode>', index),
    path('info', index),
]