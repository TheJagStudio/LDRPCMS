# Generated by Django 4.1.4 on 2023-08-14 10:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0004_faculty_gender_hod_gender_labassistant_gender_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="department",
            name="name",
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name="division", name="name", field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name="semester", name="name", field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name="subject", name="name", field=models.CharField(max_length=100),
        ),
    ]