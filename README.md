# Recipe Management App

A web application for managing recipes, built with Django (backend) and React (frontend). Users can view, add, update, and delete recipes with ease.

## Features

- **View Recipes**: Browse a list of recipes with details.
- **Add Recipes**: Create new recipes with titles, descriptions, ingredients, instructions, and images.
- **Update Recipes**: Edit existing recipes.
- **Delete Recipes**: Remove recipes from the list.

## Tech Stack

- **Frontend**: React, Axios
- **Backend**: Django, Django REST Framework
- **Database**: SQLite (default)

## API Endpoints

- `GET /api/recipes/`: Retrieve all recipes.
- `POST /api/recipes/`: Create a new recipe.
- `GET /api/recipes/<int:pk>/`: Retrieve a specific recipe.
- `PUT/PATCH /api/recipes/<int:pk>/`: Update a specific recipe.
- `DELETE /api/recipes/<int:pk>/`: Delete a specific recipe.

## Features

*Empty dashboard*
![Feature 1](images/recipe_app_1.png)

*Adding a new recipe*
![Feature 1](images/recipe_app_2.png)

*Added recipe*
![Feature 1](images/recipe_app_3.png)

*Expanded recipe*
![Feature 1](images/recipe_app_4.png)

*Editing existing recipe*
![Feature 1](images/recipe_app_5.png)

*Updated recipe*
![Feature 1](images/recipe_app_6.png)

*Multiple recipes*
![Feature 1](images/recipe_app_7.png)

*`GET /api/recipes/` endpoint*
![Feature 1](images/recipe_app_8.png)

*`GET /api/recipes/<int:pk>/` endpoint example*
![Feature 1](images/recipe_app_9.png)
