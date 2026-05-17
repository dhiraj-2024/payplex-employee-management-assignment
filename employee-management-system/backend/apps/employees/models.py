from django.db import models

from django.contrib.auth.models import User


class Employee(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="employees"
    )

    first_name = models.CharField(max_length=100)

    last_name = models.CharField(max_length=100)

    email = models.EmailField(unique=True)

    phone = models.CharField(max_length=15)

    department = models.CharField(max_length=100)

    position = models.CharField(max_length=100)

    salary = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    hire_date = models.DateField()

    is_active = models.BooleanField(
        default=True
    )

    is_deleted = models.BooleanField(
        default=False
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return (
            f"{self.first_name} "
            f"{self.last_name}"
        )
