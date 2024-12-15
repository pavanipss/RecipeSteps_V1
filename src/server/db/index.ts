import sqlite3 from 'sqlite3';
import { Recipe, Step, Ingredient } from './schema';

const db = new sqlite3.Database(':memory:');

export async function getRecipe(id: number): Promise<Recipe | null> {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM recipes WHERE id = ?', [id], (err, row) => {
      if (err) reject(err);
      resolve(row as Recipe | null);
    });
  });
}

export async function getRecipeSteps(recipeId: number): Promise<Step[]> {
  return new Promise((resolve, reject) => {
    db.all(
      'SELECT * FROM steps WHERE recipe_id = ? ORDER BY order_index',
      [recipeId],
      (err, rows) => {
        if (err) reject(err);
        resolve(rows as Step[]);
      }
    );
  });
}

export async function getStepIngredients(stepId: number): Promise<Ingredient[]> {
  return new Promise((resolve, reject) => {
    db.all(
      'SELECT * FROM ingredients WHERE step_id = ?',
      [stepId],
      (err, rows) => {
        if (err) reject(err);
        resolve(rows as Ingredient[]);
      }
    );
  });
}