import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

interface HeaderProps {
  currentStep: number;
  totalSteps: number;
}

export default function Header({ currentStep, totalSteps }: HeaderProps) {
  return (
    <div className="bg-orange-500 text-white p-6 rounded-lg mb-8">
      <div className="flex items-center gap-3 mb-2">
        <UtensilsCrossed size={24} />
        <h1 className="text-2xl font-bold">Mexican Rice Recipe</h1>
      </div>
      <div className="bg-orange-400 h-2 rounded-full mb-4">
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