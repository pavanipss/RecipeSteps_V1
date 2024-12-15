import React, { useEffect, useState } from 'react';
import { getAllRecipes } from '../server/db';

const RecipeList = ({ onSelectRecipe }: { onSelectRecipe: (recipe: any) => void }) => {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const allRecipes = await getAllRecipes();
      setRecipes(allRecipes);
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => onSelectRecipe(recipe)}>
            {recipe.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
