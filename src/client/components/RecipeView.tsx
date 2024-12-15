import React from 'react';
import { useRecipe } from '../api/recipes';
import RecipeHeader from './RecipeHeader';
import StepCard from './StepCard';

interface RecipeViewProps {
  recipeId: number;
}

export default function RecipeView({ recipeId }: RecipeViewProps) {
  const { data: recipe, isLoading, error } = useRecipe(recipeId);
  const [currentStep, setCurrentStep] = React.useState(0);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading recipe</div>;
  if (!recipe) return null;

  const goToNextStep = () => {
    if (currentStep < recipe.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto py-8 px-4">
        <RecipeHeader
          title={recipe.title}
          currentStep={currentStep}
          totalSteps={recipe.steps.length}
          totalTime={recipe.totalTime}
          servings={recipe.servings}
        />

        {recipe.steps.map((step, index) => (
          <StepCard
            key={step.id}
            step={step}
            isActive={currentStep === index}
            onPrevious={goToPreviousStep}
            onNext={goToNextStep}
            hasPrevious={currentStep > 0}
            hasNext={currentStep < recipe.steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}