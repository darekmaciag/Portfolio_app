from rest_framework import serializers
from backend.models import HomePage, ProjectInfo, SkillInfo, AboutInfo, SkillDetail, ServiceInfo, ServiceDetail, TestimonialsInfo, ContactInfo, SocialIcons, SchollDetail, WorkDetail, YourProject

# project serializer


class ProjectInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProjectInfo
        fields = ['name', 'description', 'github', 'demo', 'image']


class SkillInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = SkillInfo
        fields = ['id', 'name', 'description', 'icon']


class SkillDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = SkillDetail
        fields = ['skill', 'name', 'level']


class AboutInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = AboutInfo
        fields = ['about_description', 'image', 'image_alt', 'info_title1', 'info_subtitle1', 'info_subtitle1a', 'info_title2', 'info_subtitle2', 'info_subtitle2a', 'info_title3', 'info_subtitle3', 'info_subtitle3a', 'download']


class ServiceInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = ServiceInfo
        fields = ['id', 'name', 'name2', 'icon']


class ServiceDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = ServiceDetail
        fields = ['service', 'name']


class TestimonialsInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = TestimonialsInfo
        fields = ['name', 'client', 'image', 'alt', 'description', 'stars']


class ContactInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactInfo
        fields = ['name', 'icon', 'description']


class SocialIconsSerializer(serializers.ModelSerializer):

    class Meta:
        model = SocialIcons
        fields = ['name', 'url', 'icon']


class SchollDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = SchollDetail
        fields = ['id', 'name', 'subtitle', 'major', 'date']


class WorkDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkDetail
        fields = ['id', 'name', 'subtitle', 'major', 'date']


class HomePageSerializer(serializers.ModelSerializer):

    class Meta:
        model = HomePage
        fields = ['name', 'subtitles1', 'subtitles2', 'subtitles3', 'description', 'alt', 'image']


class YourProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = YourProject
        fields = ['title', 'description', 'alt', 'image']
