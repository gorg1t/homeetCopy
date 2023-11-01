from django.shortcuts import render, HttpResponseRedirect, reverse, redirect
from .forms import nameForm
from .models import FormData


def index(request):
    return render(request, "index.html")

def SaveForm(request):
    if request.method == "POST":
        name = request._post.get("name", "z")
        gender = request._post.get("gender", "z")
        tg = request._post.get("tgLink", "z")
        tel = request._post.get("telNumber", "z")
        about = request._post.get("aboutText", "z")
        other = request._post.get("other", "z")
        formData = FormData(name=name, gender=gender, tg=tg, tel=tel, about=about, other=other)
        formData.save()
        return HttpResponseRedirect("")
    else:
        return HttpResponseRedirect("")