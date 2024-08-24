import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddRecipeForm from './AddRecipeForm';
import EditRecipeForm from './EditRecipeForm';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [expandedRecipeId, setExpandedRecipeId] = useState(null);
  const [editingRecipeId, setEditingRecipeId] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/recipes/')
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching the recipes:', error));
  }, []);

  const handleRecipeClick = (id) => {
    setExpandedRecipeId(expandedRecipeId === id ? null : id);
  };

  const handleRecipeAdded = (newRecipe) => {
    setRecipes([...recipes, newRecipe]); // Add the new recipe to the list
  };

  const handleRecipeUpdated = (updatedRecipe) => {
    setRecipes(recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe));
    setEditingRecipeId(null);
  };

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/recipes/${id}/`)
      .then(() => {
        setRecipes(recipes.filter(recipe => recipe.id !== id));
      })
      .catch(error => console.error('There was an error deleting the recipe!', error));
  };

  return (
    <div>
      <h1>Recipes</h1>
      <AddRecipeForm onRecipeAdded={handleRecipeAdded} />
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h2 onClick={() => handleRecipeClick(recipe.id)}>{recipe.title}</h2>
            {expandedRecipeId === recipe.id && (
              <div>
                <img src={recipe.image_url} alt={recipe.title} />
                <p><strong>Description:</strong> {recipe.description}</p>
                <h3>Ingredients</h3>
                <p>{recipe.ingredients}</p>
                <h3>Instructions</h3>
                <p>{recipe.instructions}</p>
                <button onClick={() => setEditingRecipeId(recipe.id)}>Edit</button>
                {editingRecipeId === recipe.id && (
                  <EditRecipeForm recipeId={recipe.id} onRecipeUpdated={handleRecipeUpdated} />
                )}
                <button onClick={() => handleDelete(recipe.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
