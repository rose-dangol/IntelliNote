from rest_framework import viewsets
from .models import Knowledge
from .serializers import KnowledgeSerializer

class KnowledgeViewSet(viewsets.ModelViewSet):
    queryset = Knowledge.objects.all()
    serializer_class = KnowledgeSerializer
