from __future__ import unicode_literals
from django.utils.encoding import python_2_unicode_compatible

from django.db import models

# Create your models here.
@python_2_unicode_compatible
class BorrowPost(models.Model):
    item = models.CharField(max_length=200, default="unnamed object")
    pub_date = models.DateTimeField('lending date')
    person = models.CharField(max_length=200, default= "anonymous person")
    ifreturned = models.BooleanField(default=0)
    return_date = models.DateTimeField('return date')
    def __str__(self):
        return (self.item)
