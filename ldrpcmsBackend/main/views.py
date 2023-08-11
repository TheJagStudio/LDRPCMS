from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def calendarDetails(request):
    if request.method == "GET":
        return HttpResponse("Get")
    if request.method == "POST":
        return HttpResponse("Get")
    return HttpResponse("hello")
