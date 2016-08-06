from django.shortcuts import render
from django.http import HttpResponse
from .models import ListPost
from django.utils import timezone
from django.http import JsonResponse

# Create your views here.

def index(request):
    print "index requested"
    posts = ListPost.objects.all()
    context={
    "posts" : posts
    }
    template='giventakelist/index1.html'
    return render(request,template,context)
def update_isreturned(request):
    print "requested"
    if request.method == "POST":
        try:
            id = request.POST.get('id')
            print id
            post = ListPost.objects.get(id=id)
            post.ifreturned = not post.ifreturned
            #post.return_date = timezone.now
            post.save()
            print post.ifreturned
            responsedata = {"status" : 200}
            return JsonResponse(responsedata)
        except:
            return HttpResponse("not found")
    return HttpResponse("Nothing to do here")
