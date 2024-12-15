import React from 'react';
import { sambarRecipe } from './data/recipes/sambar';
import RecipeHeader from './components/RecipeHeader';
import StepCard from './components/StepCard';

function App() {
  const [currentStep, setCurrentStep] = React.useState(0);

  const goToNextStep = () => {
    if (currentStep < sambarRecipe.steps.length - 1) {
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
          title={sambarRecipe.title}
          currentStep={currentStep}
          totalSteps={sambarRecipe.steps.length}
          totalTime={sambarRecipe.totalTime}
          servings={sambarRecipe.servings}
        />

        {sambarRecipe.steps.map((step, index) => (
          <StepCard
            key={step.id}
            step={step}
            isActive={currentStep === index}
            onPrevious={goToPreviousStep}
            onNext={goToNextStep}
            hasPrevious={currentStep > 0}
            hasNext={currentStep < sambarRecipe.steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default App;