import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StepNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export default function StepNavigation({ 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext 
}: StepNavigationProps) {
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={onPrevious}
        disabled={!hasPrevious}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          !hasPrevious
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : hasNext
            ? 'bg-white text-gray-800 hover:bg-gray-50'
            : 'bg-orange-500 text-white hover:bg-orange-600'
        }`}
      >
        <ChevronLeft size={18} />
        Previous
      </button>
      
      <button
        onClick={onNext}
        disabled={!hasNext}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          hasNext
            ? 'bg-orange-500 text-white hover:bg-orange-600'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        Next
        <ChevronRight size={18} />
      </button>
    </div>
  );
}