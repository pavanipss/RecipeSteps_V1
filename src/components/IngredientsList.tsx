import React from 'react';
import { Ingredient } from '../data/types';

interface IngredientsListProps {
  ingredients: Ingredient[];
}

export default function IngredientsList({ ingredients }: IngredientsListProps) {
  return (
    <div className="space-y-2">
      <h4 className="font-medium text-gray-700">Ingredients needed:</h4>
      <div className="flex flex-wrap gap-2">
        {ingredients.map((ingredient, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm"
          >
            {ingredient.amount} {ingredient.name}
          </span>
        ))}
      </div>
    </div>
  );
}