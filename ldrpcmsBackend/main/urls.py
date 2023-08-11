from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("calendarDetails/", views.calendarDetails, name="calendarDetails"),
]


admin.site.site_header = "LDRP CMS"
admin.site.site_title = "LDRP CMS Admin Portal"
admin.site.index_title = "Super Admin"
