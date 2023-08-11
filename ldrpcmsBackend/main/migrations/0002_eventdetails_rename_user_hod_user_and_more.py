# Generated by Django 4.1.4 on 2023-08-06 06:56

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="EventDetails",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("eventType", models.CharField(max_length=50)),
                ("eventColor", models.CharField(max_length=15)),
            ],
        ),
        migrations.RenameField(model_name="hod", old_name="User", new_name="user",),
        migrations.RenameField(
            model_name="labassistant", old_name="User", new_name="user",
        ),
        migrations.CreateModel(
            name="CalendarDetails",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("date", models.DateField()),
                ("title", models.CharField(max_length=50)),
                ("description", models.CharField(max_length=500)),
                ("startTime", models.TimeField(default=datetime.time(9, 0))),
                ("endTime", models.TimeField(default=datetime.time(16, 0))),
                (
                    "event",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="main.eventdetails",
                    ),
                ),
            ],
        ),
    ]