from django.shortcuts import render
from django.views.generic.base import View


from django.http import HttpResponse
  

# Create your views here.
class ViewPage(View):
    def get(self, request):
        return render(request, 'index.html')