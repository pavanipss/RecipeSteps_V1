import React from 'react';
import { RecipeStep } from '../data/types';
import Timer from './Timer';
import IngredientsList from './IngredientsList';
import StepNavigation from './StepNavigation';

interface StepCardProps {
  step: RecipeStep;
  isActive: boolean;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export default function StepCard({ 
  step, 
  isActive,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext
}: StepCardProps) {
  if (!isActive) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">{step.title}</h3>
        {step.timer && (
          <Timer duration={step.timer} isActive={isActive} />
        )}
      </div>
      
      <p className="text-lg mb-6 text-gray-700">{step.instruction}</p>
      
      {step.ingredients && step.ingredients.length > 0 && (
        <div className="mb-6">
          <IngredientsList ingredients={step.ingredients} />
        </div>
      )}

      <StepNavigation
        onPrevious={onPrevious}
        onNext={onNext}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
      />
    </div>
  );
}