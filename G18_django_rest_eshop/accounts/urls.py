from django.urls import path
from django.contrib.auth import views as av
urlpatterns = [
    path('login/', av.LoginView.as_view(), name='login'),
    path('logout/', av.LogoutView.as_view(), name='logout'),
]
