from django.db import models
from djano import forms
from django.forms import ModelForm

from .models import LendBorrowPost

class PostForm(ModelForm):
      class Meta:
      models = LendBorrowPost
      fields = ['post_type','item','pub_date','person','return_date'] 


      def CheckForm (self):
      	data = self.cleaned_data
      	if 'pub_date' in data :
      		PubDate = self.cleaned_data['pub_date']
      		if type(PubDate) != models.DateTimeField:
      			raise forms.ValidationError (" Enter a Date")

      	if 'return_date' in data:
      		RetDate = self.cleaned_data['return_date']
      		if type(RetDate) != models.DateTimeField:
      			raise ValidationError ("Enter a Date")


