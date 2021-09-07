from django.db import models

# Create your models here.


class ProjectInfo(models.Model):

    name = models.CharField(max_length=30)
    description = models.TextField(max_length=200)
    github = models.URLField()
    demo = models.URLField(blank=True)
    image = models.FileField(upload_to="photos/", blank=True)
    alt = models.CharField(max_length=30, blank=True)
    show = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class SkillInfo(models.Model):

    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=30)
    description = models.TextField(max_length=200, blank=True)
    icon = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.name


class SkillDetail(models.Model):

    skill = models.ForeignKey(SkillInfo, on_delete=models.CASCADE)
    name = models.CharField(max_length=20, blank=True)
    level = models.CharField(max_length=5, blank=True, default='50%')

    def __str__(self):
        return self.name


class AboutInfo(models.Model):

    about_description = models.TextField(max_length=2000, blank=True)
    image = models.FileField(upload_to="photos/", blank=True)
    image_alt = models.TextField(max_length=50, blank=True)
    info_title1 = models.CharField(max_length=10, blank=True)
    info_subtitle1 = models.CharField(max_length=50, blank=True)
    info_subtitle1a = models.CharField(max_length=50, blank=True)
    info_title2 = models.CharField(max_length=10, blank=True)
    info_subtitle2 = models.CharField(max_length=50, blank=True)
    info_subtitle2a = models.CharField(max_length=50, blank=True)
    info_title3 = models.CharField(max_length=10, blank=True)
    info_subtitle3 = models.CharField(max_length=50, blank=True)
    info_subtitle3a = models.CharField(max_length=50, blank=True)
    download = models.FileField(upload_to="download/",blank=True)

    def __str__(self):
        return self.image_alt


class SchollDetail(models.Model):

    name = models.CharField(max_length=80)
    subtitle = models.TextField(max_length=50, blank=True)
    major = models.TextField(max_length=50, blank=True)
    date = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.name


class WorkDetail(models.Model):

    name = models.CharField(max_length=50)
    subtitle = models.TextField(max_length=50, blank=True)
    major = models.TextField(max_length=50, blank=True)
    date = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.name


class ServiceInfo(models.Model):

    name = models.CharField(max_length=30)
    name2 = models.CharField(max_length=30)
    icon = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class ServiceDetail(models.Model):

    service = models.ForeignKey(ServiceInfo, on_delete=models.CASCADE)
    name = models.TextField(max_length=200)

    def __str__(self):
        return self.name


class TestimonialsInfo(models.Model):

    name = models.CharField(max_length=30)
    client = models.CharField(max_length=30)
    image = models.FileField(upload_to="photos/", blank=True)
    alt = models.CharField(max_length=30, blank=True)
    description = models.CharField(max_length=200, blank=True)
    stars = models.IntegerField(blank=True, default=4)

    def __str__(self):
        return self.name


class ContactInfo(models.Model):

    name = models.CharField(max_length=30)
    icon = models.CharField(max_length=30)
    description = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class SocialIcons(models.Model):

    name = models.CharField(max_length=30)
    url = models.URLField(blank=True)
    icon = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class HomePage(models.Model):

    name = models.CharField(max_length=50)
    subtitles1 = models.TextField(max_length=150, blank=True)
    subtitles2 = models.TextField(max_length=150, blank=True)
    subtitles3 = models.TextField(max_length=150, blank=True)
    description = models.TextField(max_length=300, blank=True)
    image = models.FileField(upload_to="photos/", blank=True)
    alt = models.CharField(max_length=30, blank=True)

    def __str__(self):
        return self.name


class YourProject(models.Model):

    title = models.CharField(max_length=50)
    description = models.TextField(max_length=150, blank=True)
    image = models.FileField(upload_to="photos/", blank=True)
    alt = models.CharField(max_length=30, blank=True)

    def __str__(self):
        return self.title
