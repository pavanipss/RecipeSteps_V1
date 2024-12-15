export interface Ingredient {
  name: string;
  amount: string;
}

export interface RecipeStep {
  id: number;
  title: string;
  instruction: string;
  timer?: number;
  ingredients?: Ingredient[];
}

export interface Recipe {
  title: string;
  totalTime: string;
  servings: number;
  steps: RecipeStep[];
}