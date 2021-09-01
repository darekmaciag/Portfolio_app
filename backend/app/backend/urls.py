from django.contrib import admin
from django.urls import path
from . import views
from rest_framework import routers
from .api import HomePageViewSet, ProjectInfoViewSet, SkillInfoViewSet, SkillDetailViewSet, AboutInfoViewSet, ServiceInfoViewSet, ServiceDetailViewSet, TestimonialsInfoViewSet, ContactInfoViewSet, SocialIconsViewSet, SchollDetailViewSet, WorkDetailViewSet, YourProjectViewSet


router = routers.DefaultRouter()
router.register('home', HomePageViewSet)
router.register('projects', ProjectInfoViewSet)
router.register('skillsinfo', SkillInfoViewSet)
router.register('skilldetail', SkillDetailViewSet)
router.register('about', AboutInfoViewSet)
router.register('serviceinfo', ServiceInfoViewSet)
router.register('servicedetail', ServiceDetailViewSet)
router.register('testimonials', TestimonialsInfoViewSet)
router.register('contact', ContactInfoViewSet)
router.register('socialicons', SocialIconsViewSet)
router.register('schools', SchollDetailViewSet)
router.register('works', WorkDetailViewSet)
router.register('yourproject', YourProjectViewSet)


urlpatterns = router.urls

# urlpatterns = [path('backend/', views.index, name='index'), ]
