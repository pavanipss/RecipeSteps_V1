export interface Recipe {
  id: number;
  title: string;
  totalTime: string;
  servings: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Step {
  id: number;
  recipeId: number;
  title: string;
  instruction: string;
  timer?: number;
  orderIndex: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Ingredient {
  id: number;
  stepId: number;
  name: string;
  amount: string;
  createdAt: Date;
  updatedAt: Date;
}