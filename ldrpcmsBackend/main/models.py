from django.db import models
from django.contrib.auth.models import User
from datetime import time


class Department(models.Model):
    name = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Semester(models.Model):
    name = models.CharField(max_length=100)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Division(models.Model):
    name = models.CharField(max_length=100)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Subject(models.Model):
    name = models.CharField(max_length=100)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)
    division = models.ForeignKey(Division, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Faculty(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    phone = models.CharField(max_length=10)
    gender = models.CharField(max_length=6, default="male")
    is_cc = models.BooleanField(default=False)
    CCDivison = models.ForeignKey(
        Division, on_delete=models.CASCADE, null=True, blank=True
    )
    CCbatch = models.DateField(null=True, blank=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name


class LabAssistant(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    phone = models.CharField(max_length=10)
    gender = models.CharField(max_length=6, default="male")
    labName = models.CharField(max_length=10)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name


class HOD(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    gender = models.CharField(max_length=6, default="male")
    phone = models.CharField(max_length=10)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    enrollmentNo = models.CharField(max_length=20)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)
    division = models.ForeignKey(Division, on_delete=models.CASCADE)
    phone = models.CharField(max_length=10)
    gender = models.CharField(max_length=6, default="male")
    batch = models.DateField()
    is_member = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name


class EventDetails(models.Model):
    eventType = models.CharField(max_length=50)
    eventColor = models.CharField(max_length=15)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.eventType


class CalendarDetails(models.Model):
    date = models.DateField()
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    startTime = models.TimeField(default=time(9, 0, 0))
    endTime = models.TimeField(default=time(16, 0, 0))
    event = models.ForeignKey(EventDetails, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title + " " + self.date


# {
#     year: 2023,
#     day: 25,
#     title: "Holiday 1",
#     description: "This is a holiday",
#     color: "green",
#     start: "9:00",
#     end: "4:00",
# },
