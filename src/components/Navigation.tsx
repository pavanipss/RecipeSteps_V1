import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Navigation({ 
  currentStep, 
  totalSteps, 
  onPrevious, 
  onNext 
}: NavigationProps) {
  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={onPrevious}
        disabled={currentStep === 0}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
          currentStep === 0
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-800 hover:bg-gray-50'
        }`}
      >
        <ChevronLeft size={20} />
        Previous
      </button>
      
      <button
        onClick={onNext}
        disabled={currentStep === totalSteps - 1}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
          currentStep === totalSteps - 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-orange-500 text-white hover:bg-orange-600'
        }`}
      >
        Next
        <ChevronRight size={20} />
      </button>
    </div>
  );
}