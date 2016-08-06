from django.conf.urls import url
from . import views

urlpatterns=[
    url(r'^$', views.index, name='index'),
    url(r'^update_isreturned$', views.update_isreturned, name='update_isreturned'),
]
