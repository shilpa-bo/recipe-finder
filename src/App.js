// src/App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import './styles/main.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleSearch = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      console.log(data); // Log the API response
      setRecipes(data.meals || []); // Set recipes to an empty array if data.meals is undefined
    } catch (error) {
      console.error("Error fetching recipes:", error); // Log any errors
    }
  };

  const handleSelectRecipe = (id) => {
    setSelectedRecipeId(id);
  };

  return (
    <div className="App">

      <SearchBar onSearch={handleSearch} />
      {selectedRecipeId ? (
        <RecipeDetails recipeId={selectedRecipeId} />
      ) : (
        <RecipeList recipes={recipes} onSelectRecipe={handleSelectRecipe} />
      )}
    </div>
  );
}

export default App;
