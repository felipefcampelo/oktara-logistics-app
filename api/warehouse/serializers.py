from rest_framework import serializers
from warehouse import models
from inventory import models as inventory_models
from inventory import serializers as inventory_serializers


class WarehousePositionSerializer(serializers.ModelSerializer):
    warehouse_position_status = serializers.StringRelatedField(
        many=False, read_only=True)
    
    class Meta:
        model = models.WarehousePosition
        fields = "__all__"


class WarehousePositionStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.WarehousePositionStatus
        fields = "__all__"


class WarehousePositionPackagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = inventory_models.Package
        fields = ['warehouse_position_id', 'package_id', 'name']
