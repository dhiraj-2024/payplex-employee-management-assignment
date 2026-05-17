from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Employee

from .serializers import EmployeeSerializer


class EmployeeViewSet(viewsets.ModelViewSet):

    serializer_class = EmployeeSerializer

    permission_classes = [IsAuthenticated]

    search_fields = [
        'first_name',
        'last_name',
        'email',
        'department'
    ]

    filterset_fields = [
        'department',
        'position'
    ]

    def get_queryset(self):

        return Employee.objects.filter(
            user=self.request.user,
            is_deleted=False
        ).order_by('-created_at')

    def perform_create(self, serializer):

        serializer.save(
            user=self.request.user
        )

    def perform_destroy(self, instance):

        instance.is_deleted = True

        instance.save()
