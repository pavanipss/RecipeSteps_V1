export interface Ingredient {
  name: string;
  amount: string;
}

export interface RecipeStep {
  instruction: string;
  ingredients?: Ingredient[];
  timer?: number;
}

export const recipeSteps: RecipeStep[] = [
  {
    instruction: "To a pan, add oil, oregano, onions.",
    ingredients: [
      { name: "Oil", amount: "2 Tablespoon" },
      { name: "Oregano", amount: "1 Teaspoon" },
      { name: "Onions", amount: "1 Piece" }
    ]
  },
  {
    instruction: "Saute until onions are translucent.",
    timer: 300
  },
  {
    instruction: "Add bell peppers, jalapeno, salsa.",
    ingredients: [
      { name: "Salsa", amount: "1 Cup" },
      { name: "Bell Peppers", amount: "1 Cup" },
      { name: "Jalapeno", amount: "1/4 Cup" }
    ]
  },
  {
    instruction: "Add tomato ketchup, black pepper powder.",
    ingredients: [
      { name: "Black Pepper Powder", amount: "1 Teaspoon" },
      { name: "Tomato Ketchup", amount: "1 Tablespoon" }
    ]
  }
];