import React, { useState } from 'react';
import axios from 'axios';

function AddRecipeForm({ onRecipeAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { title, description, ingredients, instructions, image_url: imageUrl };

    axios.post('http://127.0.0.1:8000/api/recipes/', newRecipe)
      .then(response => {
        onRecipeAdded(response.data); // Notify parent component about the new recipe
        setTitle('');
        setDescription('');
        setIngredients('');
        setInstructions('');
        setImageUrl('');
      })
      .catch(error => {
        console.error('There was an error adding the recipe!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>
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
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
