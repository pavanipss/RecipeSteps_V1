import React from 'react';
import { UtensilsCrossed, Clock, Users } from 'lucide-react';

interface RecipeHeaderProps {
  title: string;
  currentStep: number;
  totalSteps: number;
  totalTime: string;
  servings: number;
}

export default function RecipeHeader({ 
  title, 
  currentStep, 
  totalSteps, 
  totalTime, 
  servings 
}: RecipeHeaderProps) {
  return (
    <div className="bg-orange-500 text-white p-6 rounded-lg mb-8">
      <div className="flex items-center gap-3 mb-4">
        <UtensilsCrossed size={24} />
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      
      <div className="flex gap-4 mb-4 text-orange-100">
        <div className="flex items-center gap-2">
          <Clock size={18} />
          <span>{totalTime}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={18} />
          <span>Serves {servings}</span>
        </div>
      </div>

      <div className="bg-orange-400 h-2 rounded-full mb-2">
        <div
          className="bg-white h-full rounded-full transition-all duration-300"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>
      <p className="text-orange-100">
        Step {currentStep + 1} of {totalSteps}
      </p>
    </div>
  );
}