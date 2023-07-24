from django.urls import path
from .views import main

urlpatterns = [
    path('home',main) # When this is called return what "main" had done inside
]
