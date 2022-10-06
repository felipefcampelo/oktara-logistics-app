from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from inventory import serializers
from inventory import models


class PackageViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = models.Package.objects.all()
        serializer = serializers.PackageSerializer(queryset, many=True)

        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = models.Package.objects.all()
        package = get_object_or_404(queryset, pk=pk)
        serializer = serializers.PackageSerializer(package)

        return Response(serializer.data)


class PackageStatusViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.PackageStatusSerializer
    queryset = models.PackageStatus.objects.all()
