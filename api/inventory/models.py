from django.db import models


class Package(models.Model):
    package_id = models.AutoField(
        auto_created=True, 
        primary_key=True, 
        serialize=False
    )
    name = models.CharField(
        max_length=255, 
        null=False
    )
    warehouse_position = models.ForeignKey(
        'warehouse.WarehousePosition', 
        on_delete=models.CASCADE, 
        null=True
    )
    shipment = models.ForeignKey(
        'shipments.Shipment', 
        on_delete=models.CASCADE, 
        null=True
    )
    package_status = models.ForeignKey(
        'PackageStatus', 
        on_delete=models.CASCADE
    )
    created_at = models.DateField(
        auto_now_add=True
    )

    class Meta:
        db_table = "package"

    def __str__(self):
        return self.name


class PackageStatus(models.Model):
    package_status_id = models.AutoField(
        auto_created=True, 
        primary_key=True, 
        serialize=False
    )
    name = models.CharField(
        max_length=255, 
        null=False
    )
    created_at = models.DateField(
        auto_now_add=True
    )

    class Meta:
        db_table = "package_status"

    def __str__(self):
        return self.name
