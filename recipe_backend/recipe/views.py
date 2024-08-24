from django.http import HttpResponse
from rest_framework import generics
from .models import Recipe
from .serializers import RecipeSerializer

# Create your views here.

# List and create recipes
class RecipeList(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

# Retrieve, update, or delete a specific recipe
class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

def home(request):
    return HttpResponse("<h1>Welcome to the Recipe App!</h1>")