from rest_framework import serializers
from inventory import models


class PackageSerializer(serializers.ModelSerializer):
    shipment = serializers.StringRelatedField(many=False, read_only=True)
    warehouse_position = serializers.StringRelatedField(many=False, read_only=True)
    package_status = serializers.StringRelatedField(many=False, read_only=True)

    class Meta:
        model = models.Package
        fields = "__all__"


class PackageStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PackageStatus
        fields = "__all__"