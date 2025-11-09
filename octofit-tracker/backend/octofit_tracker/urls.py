
"""URLconf for OctoFit Tracker API."""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, TeamViewSet, ActivityViewSet, WorkoutViewSet, LeaderboardViewSet
from django.http import JsonResponse
import os


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'teams', TeamViewSet)
router.register(r'activities', ActivityViewSet)
router.register(r'workouts', WorkoutViewSet)
router.register(r'leaderboard', LeaderboardViewSet)

def api_root(request):
    codespace_name = os.environ.get('CODESPACE_NAME', 'localhost')
    if codespace_name != 'localhost':
        api_url = f"https://{codespace_name}-8000.app.github.dev/api/"
    else:
        api_url = "http://localhost:8000/api/"
    return JsonResponse({"api_url": api_url})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('', api_root, name='api-root'),
]
