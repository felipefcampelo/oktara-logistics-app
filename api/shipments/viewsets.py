from rest_framework import viewsets
from shipments import serializers
from shipments import models
from inventory import models as inventory_models


class ShipmentViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ShipmentSerializer
    queryset = models.Shipment.objects.all()


class ShipmentStatusViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ShipmentStatusSerializer
    queryset = models.ShipmentStatus.objects.all()


class ShipmentPackagesViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ShipmentPackagesSerializer

    def get_queryset(self):
        shipment_id = self.request.query_params.get("pk")
        return inventory_models.Package.objects.filter(shipment_id=shipment_id)
        