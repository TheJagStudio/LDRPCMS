from django.contrib import admin
from .models import Department, Semester, Division, Subject, Faculty, LabAssistant, HOD, Student, EventDetails, CalendarDetails
from import_export.admin import ExportActionMixin


class DepartmentAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("name", "is_active")
    # search_fields = ["name"]


class SemesterAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("name", "department", "is_active")
    list_filter = ["department__name", "is_active"]
    search_fields = ["name", "department__name"]


class DivisionAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("name", "department", "semester", "is_active")
    search_fields = ["name", "department__name", "semester__name"]
    list_filter = ["name", "semester", "is_active"]


class SubjectAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("name", "department", "semester", "division", "is_active")
    search_fields = ["name", "department__name", "semester__name"]
    list_filter = ["name", "semester", "department__name", "is_active"]


class FacultyAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("user", "department", "phone", "is_cc", "is_active")
    search_fields = ["user__firstname", "department__name"]
    list_filter = ["department__name", "is_cc", "is_active"]


class LabAssistantAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("user", "department", "phone", "labName", "is_active")
    search_fields = ["user__firstname", "department__name", "labName"]
    list_filter = ["department__name", "is_active"]


class HODAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("user", "department", "phone", "is_active")
    search_fields = ["user__firstname", "department__name"]
    list_filter = ["department__name", "is_active"]


class StudentAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("user", "enrollmentNo", "department", "semester", "division", "phone", "batch", "is_active")
    search_fields = ["user__firstname", "enrollmentNo", "department__name", "semester__name", "division__name", "batch"]
    list_filter = ["department__name", "semester__name", "division__name", "is_active"]


class EventDetailsAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("eventType", "eventColor", "is_active")
    search_fields = ["eventType", "eventColor"]
    list_filter = ["eventType", "is_active"]


class CalendarDetailsAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ("date", "title", "description", "startTime", "endTime", "event", "is_active")
    search_fields = ["date", "title", "description", "startTime", "endTime", "event__eventType"]
    list_filter = ["event__eventType", "is_active"]


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
