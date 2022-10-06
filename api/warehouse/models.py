from django.db import models


class WarehousePosition(models.Model):
    warehouse_position_id = models.AutoField(
        auto_created=True, 
        primary_key=True, 
        serialize=False
    )
    position_code = models.CharField(
        max_length=255, 
        null=False
    )
    warehouse_position_status = models.ForeignKey(
        'WarehousePositionStatus',
        on_delete=models.CASCADE,
        null=False
    )
    created_at = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        db_table = "warehouse_position"

    def __str__(self):
        return self.position_code


class WarehousePositionStatus(models.Model):
    warehouse_position_status_id = models.AutoField(
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
        db_table = "warehouse_position_status"

    def __str__(self):
        return self.name
