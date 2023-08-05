from django.db import models
from django.contrib.auth.models import User


class Department(models.Model):
    name = models.CharField(max_length=10)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Semester(models.Model):
    name = models.CharField(max_length=10)
    department = models.ForeignKey(department, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Division(models.Model):
    name = models.CharField(max_length=10)
    department = models.ForeignKey(department, on_delete=models.CASCADE)
    semester = models.ForeignKey(semester, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Subject(models.Model):
    name = models.CharField(max_length=10)
    department = models.ForeignKey(department, on_delete=models.CASCADE)
    semester = models.ForeignKey(semester, on_delete=models.CASCADE)
    division = models.ForeignKey(division, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Faculty(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    phone = models.CharField(max_length=10)
    is_cc = models.BooleanField(default=False)
    CCDivison = models.ForeignKey(
        Division, on_delete=models.CASCADE, null=True, blank=True
    )

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name


class LabAssistant(models.Model):
    User = models.OneToOneField(User, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    phone = models.CharField(max_length=10)
    labName = models.CharField(max_length=10)

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name


class HOD(models.Model):
    User = models.OneToOneField(User, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    phone = models.CharField(max_length=10)

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    enrollmentNo = models.CharField(max_length=20)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)
    division = models.ForeignKey(Division, on_delete=models.CASCADE)
    phone = models.CharField(max_length=10)
    batch = models.DateField()

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name
