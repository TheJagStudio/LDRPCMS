from django.contrib import admin
from .models import Department, Semester, Division, Subject, Faculty, LabAssistant, HOD, Student, EventDetails, CalendarDetails
from import_export.admin import ExportActionMixin


class DepartmentAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("name", "is_active")
    # search_fields = ["name"]


class SemesterAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("name", "department", "is_active")
    # search_fields = ["name", "department__name"]


class DivisionAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("name", "department", "semester", "is_active")
    search_fields = ["name", "department__name", "semester__name"]


class SubjectAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("name", "department", "semester", "division")
    search_fields = ["name", "department__name", "semester__name"]


class FacultyAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("user", "department", "phone", "is_cc")
    search_fields = ["user__firstname", "department__name"]


class LabAssistantAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("user", "department", "phone", "labName")
    search_fields = ["user__firstname", "department__name", "labName"]


class HODAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("user", "department", "phone")
    search_fields = ["user__firstname", "department__name"]


class StudentAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("user", "enrollmentNo", "department", "semester", "division", "phone", "batch")
    search_fields = ["user__firstname", "enrollmentNo", "department__name", "semester__name", "division__name", "batch"]


class EventDetailsAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("eventType", "eventColor")
    search_fields = ["eventType", "eventColor"]


class CalendarDetailsAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("date", "title", "description", "startTime", "endTime", "event")
    search_fields = ["date", "title", "description", "startTime", "endTime", "event__eventType"]


admin.site.register(Department, DepartmentAdmin)
admin.site.register(Semester, SemesterAdmin)
admin.site.register(Division, DivisionAdmin)
admin.site.register(Subject, SubjectAdmin)
admin.site.register(Faculty, FacultyAdmin)
admin.site.register(LabAssistant, LabAssistantAdmin)
admin.site.register(HOD, HODAdmin)
admin.site.register(Student, StudentAdmin)
admin.site.register(EventDetails, EventDetailsAdmin)
admin.site.register(CalendarDetails, CalendarDetailsAdmin)
