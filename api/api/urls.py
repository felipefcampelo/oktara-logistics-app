"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
from rest_framework import routers
from inventory import viewsets as inventory_viewsets
from shipments import viewsets as shipment_viewsets
from warehouse import viewsets as warehouse_viewsets

route = routers.DefaultRouter()

# Inventory -- Packages
route.register(r'package',
               inventory_viewsets.PackageViewSet,
               basename='Package')
route.register(r'package_status',
               inventory_viewsets.PackageStatusViewSet,
               basename='PackageStatus')

# Shipment
route.register(r'shipment',
               shipment_viewsets.ShipmentViewSet,
               basename='Shipment')
route.register(r'shipment_status',
               shipment_viewsets.ShipmentStatusViewSet,
               basename='ShipmentStatus')
route.register(r'shipment_packages',
               shipment_viewsets.ShipmentPackagesViewSet,
               basename='ShipmentPackages')

# warehouse
route.register(r'warehouse_position',
               warehouse_viewsets.WarehousePositionViewSet,
               basename='WarehousePosition')
route.register(r'warehouse_position_status',
               warehouse_viewsets.WarehousePositionStatusViewSet,
               basename='WarehousePositionStatus')
route.register(r'warehouse_position_packages',
               warehouse_viewsets.WarehousePositionPackagesViewSet,
               basename='WarehousePositionPackages')

urlpatterns = [
    path('', include(route.urls))
]
