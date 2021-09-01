from django.contrib import admin

from .models import HomePage, ProjectInfo, SkillInfo, AboutInfo, SkillDetail, ServiceInfo, ServiceDetail, TestimonialsInfo, ContactInfo, SocialIcons, SchollDetail, WorkDetail, YourProject

# Register your models here.
admin.site.register(HomePage)
admin.site.register(ProjectInfo)
admin.site.register(SkillInfo)
admin.site.register(SkillDetail)
admin.site.register(AboutInfo)
admin.site.register(ServiceInfo)
admin.site.register(ServiceDetail)
admin.site.register(TestimonialsInfo)
admin.site.register(ContactInfo)
admin.site.register(SocialIcons)
admin.site.register(SchollDetail)
admin.site.register(WorkDetail)
admin.site.register(YourProject)
