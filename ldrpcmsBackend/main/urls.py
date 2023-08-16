from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("calendarDetails/", views.calendarDetails, name="calendarDetails"),
    path('getUserDetails/', views.getUserDetails, name="getUserDetails"),
    path('dataAdder/', views.dataAdder, name="dataAdder"),
    path('avatarCreator/', views.avatarCreator, name="avatarCreator")
]


admin.site.site_header = "LDRP CMS"
admin.site.site_title = "LDRP CMS Admin Portal"
admin.site.index_title = "Super Admin"
