from rest_framework import serializers
from shipments import models
from inventory import models as inventory_models


class ShipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Shipment
        fields = "__all__"


class ShipmentStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ShipmentStatus
        fields = "__all__"


class ShipmentPackagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = inventory_models.Package
        fields = ['shipment_id', 'package_id', 'name']
