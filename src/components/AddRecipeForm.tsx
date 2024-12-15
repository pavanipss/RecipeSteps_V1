import React, { useState } from 'react';
import { addRecipe } from '../server/db';

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState({ name: '', ingredients: '', steps: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ingredients = recipe.ingredients.split(',');
    const steps = recipe.steps.split('.');
    await addRecipe({ name: recipe.name, ingredients, steps });
    alert('Recipe added!');
    setRecipe({ name: '', ingredients: '', steps: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Name"
        value={recipe.name}
        onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
      />
      <textarea
        placeholder="Ingredients (comma-separated)"
        value={recipe.ingredients}
        onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
      />
      <textarea
        placeholder="Steps (period-separated)"
        value={recipe.steps}
        onChange={(e) => setRecipe({ ...recipe, steps: e.target.value })}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
