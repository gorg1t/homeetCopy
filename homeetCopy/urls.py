from django.urls import path
from . import views




urlpatterns = [
    path("", views.ViewPage.as_view()),
]