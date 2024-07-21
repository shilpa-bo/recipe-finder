// src/components/RecipeDetails.js
import React, { useEffect, useState } from 'react';

const RecipeDetails = ({ recipeId }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
      const data = await response.json();
      setRecipe(data.meals[0]);
    };

    fetchRecipeDetails();
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>Ingredients</h3>
      <ul>
        {Object.keys(recipe)
          .filter((key) => key.startsWith('strIngredient') && recipe[key])
          .map((key) => (
            <li key={key}>{recipe[key]}</li>
          ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetails;
