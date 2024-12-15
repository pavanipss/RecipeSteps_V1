import express from 'express';
import { getRecipe, getRecipeSteps, getStepIngredients } from '../db';

const router = express.Router();

router.get('/recipes/:id', async (req, res) => {
  try {
    const recipe = await getRecipe(parseInt(req.params.id));
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    const steps = await getRecipeSteps(recipe.id);
    const stepsWithIngredients = await Promise.all(
      steps.map(async (step) => ({
        ...step,
        ingredients: await getStepIngredients(step.id),
      }))
    );

    res.json({
      ...recipe,
      steps: stepsWithIngredients,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;