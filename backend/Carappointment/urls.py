from django.urls import path, include
from . import views


urlpatterns = [
    path('',views.endpoints),
    path('szolgaltatasok/',views.MindenSzolgaltatas),
    path('szolgaltatas/<int:pk>',views.SzolgaltatasByID),
    path('autok/',views.MindenAuto),
    path('auto/<int:pk>',views.AutoByID),
    path('megrendelok/',views.MindenMegrendelo),
    path('megrendelo/<int:pk>',views.MegrendeloByID),
]