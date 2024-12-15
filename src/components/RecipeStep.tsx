import React from 'react';
import { Timer } from 'lucide-react';

interface RecipeStepProps {
  stepNumber: number;
  instruction: string;
  ingredients?: Array<{name: string; amount: string}>;
  timer?: number;
  isActive: boolean;
}

export default function RecipeStep({ stepNumber, instruction, ingredients, timer, isActive }: RecipeStepProps) {
  const [timeLeft, setTimeLeft] = React.useState(timer || 0);
  const [timerActive, setTimerActive] = React.useState(false);

  React.useEffect(() => {
    let interval: number;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000) as unknown as number;
    } else if (timeLeft === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  return (
    <div className={`p-6 rounded-lg mb-4 transition-all duration-300 ${isActive ? 'bg-white shadow-lg' : 'bg-gray-50'}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Step {stepNumber}</h3>
        {timer && (
          <button
            onClick={() => setTimerActive(!timerActive)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
          >
            <Timer size={20} />
            {timeLeft > 0 ? `${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}` : 'Start Timer'}
          </button>
        )}
      </div>
      
      <p className="text-lg mb-4">{instruction}</p>
      
      {ingredients && ingredients.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-700">Ingredients needed:</h4>
          <div className="flex flex-wrap gap-2">
            {ingredients.map((ingredient, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm"
              >
                {ingredient.amount} {ingredient.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}