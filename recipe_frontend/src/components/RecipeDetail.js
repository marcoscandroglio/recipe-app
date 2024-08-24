import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RecipeDetail({ recipeId }) {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/recipes/${recipeId}/`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error(error));
  }, [recipeId]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image_url} alt={recipe.title} />
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
