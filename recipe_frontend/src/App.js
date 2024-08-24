import React, { useState } from 'react';
import './styles.css';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  return (
    <div>
      {selectedRecipeId ? (
        <RecipeDetail recipeId={selectedRecipeId} />
      ) : (
        <RecipeList onSelectRecipe={setSelectedRecipeId} />
      )}
    </div>
  );
}

export default App;
