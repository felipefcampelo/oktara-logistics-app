from rest_framework import viewsets
from warehouse import serializers
from warehouse import models
from inventory import models as inventory_models


class WarehousePositionViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.WarehousePositionSerializer
    queryset = models.WarehousePosition.objects.all()


class WarehousePositionStatusViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.WarehousePositionStatusSerializer
    queryset = models.WarehousePositionStatus.objects.all()


class WarehousePositionPackagesViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.WarehousePositionPackagesSerializer

    def get_queryset(self):
        warehouse_position_id = self.request.query_params.get("pk")
        return inventory_models.Package.objects.filter(
            warehouse_position_id=warehouse_position_id)
