from django.shortcuts import render
from django.http import HttpResponse
from .models import LendPost

# Create your views here.

def index(request):
    posts = LendPost.objects.all()
    context={
    "posts" : posts
    }
    template='lendlist/index.html'
    return render(request,template,context)
