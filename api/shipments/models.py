from django.db import models


class Shipment(models.Model):
    shipment_id = models.AutoField(
        auto_created=True,
        primary_key=True
    )
    shipment_code = models.CharField(
        max_length=255,
        null=False
    )
    shipment_status = models.ForeignKey(
        'shipments.ShipmentStatus',
        on_delete=models.CASCADE,
        null=False
    )
    created_at = models.DateField(
        auto_now_add=True
    )

    class Meta:
        db_table = "shipment"

    def __str__(self):
        return self.shipment_code


class ShipmentStatus(models.Model):
    shipment_status_id = models.AutoField(
        auto_created=True, 
        primary_key=True
    )
    name = models.CharField(
        max_length=255, 
        null=False
    )
    created_at = models.DateField(
        auto_now_add=True
    )

    class Meta:
        db_table = "shipment_status"

    def __str__(self):
        return self.name
