import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditRecipeForm({ recipeId, onRecipeUpdated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/recipes/${recipeId}/`)
      .then(response => {
        const recipe = response.data;
        setTitle(recipe.title);
        setDescription(recipe.description);
        setIngredients(recipe.ingredients);
        setInstructions(recipe.instructions);
        setImageUrl(recipe.image_url);
      })
      .catch(error => console.error('Error fetching the recipe:', error));
  }, [recipeId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = { title, description, ingredients, instructions, image_url: imageUrl };

    axios.patch(`http://127.0.0.1:8000/api/recipes/${recipeId}/`, updatedRecipe)
      .then(response => {
        onRecipeUpdated(response.data);
      })
      .catch(error => console.error('Error updating the recipe:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <br></br>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Ingredients</label>
        <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
      </div>
      <div>
        <label>Instructions</label>
        <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
      </div>
      <div>
        <label>Image URL</label>
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </div>
      <button type="submit">Update Recipe</button>
    </form>
  );
}

export default EditRecipeForm;
