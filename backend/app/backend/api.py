from backend.models import HomePage, ProjectInfo, SkillInfo, SkillDetail, AboutInfo, ServiceInfo, ServiceDetail, TestimonialsInfo, ContactInfo, SocialIcons, SchollDetail, WorkDetail, YourProject
from rest_framework import viewsets
from .serializers import HomePageSerializer, ProjectInfoSerializer, SkillInfoSerializer, SkillDetailSerializer, AboutInfoSerializer, ServiceInfoSerializer, ServiceDetailSerializer, TestimonialsInfoSerializer, ContactInfoSerializer, SocialIconsSerializer, SchollDetailSerializer, WorkDetailSerializer, YourProjectSerializer

# Project Info viewset
# allows us to create a CRUD api without specifying methods for functionality


class ProjectInfoViewSet(viewsets.ModelViewSet):

    queryset = ProjectInfo.objects.filter(show=False)
    serializer_class = ProjectInfoSerializer


class SkillInfoViewSet(viewsets.ModelViewSet):

    queryset = SkillInfo.objects.all()
    serializer_class = SkillInfoSerializer


class SkillDetailViewSet(viewsets.ModelViewSet):

    queryset = SkillDetail.objects.all()
    serializer_class = SkillDetailSerializer


class AboutInfoViewSet(viewsets.ModelViewSet):

    queryset = AboutInfo.objects.all()
    serializer_class = AboutInfoSerializer


class ServiceInfoViewSet(viewsets.ModelViewSet):

    queryset = ServiceInfo.objects.all()
    serializer_class = ServiceInfoSerializer


class ServiceDetailViewSet(viewsets.ModelViewSet):

    queryset = ServiceDetail.objects.all()
    serializer_class = ServiceDetailSerializer


class TestimonialsInfoViewSet(viewsets.ModelViewSet):

    queryset = TestimonialsInfo.objects.all()
    serializer_class = TestimonialsInfoSerializer


class ContactInfoViewSet(viewsets.ModelViewSet):

    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer


class SocialIconsViewSet(viewsets.ModelViewSet):

    queryset = SocialIcons.objects.all()
    serializer_class = SocialIconsSerializer


class SchollDetailViewSet(viewsets.ModelViewSet):

    queryset = SchollDetail.objects.all()
    serializer_class = SchollDetailSerializer


class WorkDetailViewSet(viewsets.ModelViewSet):

    queryset = WorkDetail.objects.all()
    serializer_class = WorkDetailSerializer


class HomePageViewSet(viewsets.ModelViewSet):

    queryset = HomePage.objects.all()
    serializer_class = HomePageSerializer


class YourProjectViewSet(viewsets.ModelViewSet):

    queryset = YourProject.objects.all()
    serializer_class = YourProjectSerializer
