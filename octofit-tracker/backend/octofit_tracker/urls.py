"""Minimal URLconf for OctoFit Tracker."""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # DRF browsable API login/logout
    path('api-auth/', include('rest_framework.urls')),
]
