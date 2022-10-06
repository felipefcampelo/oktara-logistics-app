# Generated by Django 4.1.1 on 2022-10-03 19:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('warehouse', '0001_initial'),
        ('shipments', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='PackageStatus',
            fields=[
                ('package_status_id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('created_at', models.DateField(auto_now_add=True)),
            ],
            options={
                'db_table': 'package_status',
            },
        ),
        migrations.CreateModel(
            name='Package',
            fields=[
                ('package_id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('package_status', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='inventory.packagestatus')),
                ('shipment', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='shipments.shipment')),
                ('warehouse_position', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='warehouse.warehouseposition')),
            ],
            options={
                'db_table': 'package',
            },
        ),
    ]