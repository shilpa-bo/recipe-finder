// src/components/RecipeList.js
import React from 'react';

const RecipeList = ({ recipes, onSelectRecipe }) => {
  if (!recipes || recipes.length === 0) {
    return <div>No recipes found.</div>; // Show a message if no recipes are found
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} className="recipe-item" onClick={() => onSelectRecipe(recipe.idMeal)}>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>{recipe.strMeal}</h3>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
