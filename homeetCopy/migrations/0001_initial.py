# Generated by Django 4.2.6 on 2023-11-01 14:22

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="FormData",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("name", models.CharField(max_length=255)),
                ("gender", models.CharField(max_length=255)),
                ("tg", models.CharField(max_length=255)),
                ("tel", models.CharField(max_length=255)),
                ("about", models.CharField(max_length=2000)),
                ("other", models.CharField(max_length=255)),
            ],
        ),
    ]
