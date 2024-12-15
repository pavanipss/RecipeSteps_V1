import React from 'react';

const RecipeCard = ({ recipe }: { recipe: any }) => {
  if (!recipe) return <p>Select a recipe to view details</p>;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient: string, index: number) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((step: string, index: number) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeCard;
