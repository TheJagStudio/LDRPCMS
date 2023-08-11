from django.db import models
from main.models import Department, Semester, Division, Subject, Faculty, LabAssistant, HOD, Student, EventDetails, CalendarDetails
from django.contrib.auth.models import User


class Project(models.Model):
    name = models.CharField(max_length=500)
    description = models.TextField()
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)
    division = models.ForeignKey(Division, on_delete=models.CASCADE)
    mentor = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    batch = models.DateField()
    leader = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="leader", null=True, blank=True)
    teamMembers = models.ManyToManyField(Student)
    techStack = models.JSONField(default=dict)
    task = models.JSONField(default=dict)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name
