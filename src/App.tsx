import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";
import "./App.css"; // Styling

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJwVmZJg-3bJOw7hmRWeKD7XNpZGel2MQ",
  authDomain: "recipe-steps.firebaseapp.com",
  projectId: "recipe-steps",
  storageBucket: "recipe-steps.firebasestorage.app",
  messagingSenderId: "875755610280",
  appId: "1:875755610280:web:6b855785f00ff79412629d",
  measurementId: "G-EKJVW1X82C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface Step {
  description: string;
  time: string;
  ingredients: string[];
}

interface Recipe {
  id: string;
  name: string;
  steps: Step[];
}

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recipeName, setRecipeName] = useState("");
  const [steps, setSteps] = useState<Step[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    const querySnapshot = await getDocs(collection(db, "recipes"));
    const fetchedRecipes: Recipe[] = [];
    querySnapshot.forEach((doc) => {
      fetchedRecipes.push({ id: doc.id, ...doc.data() } as Recipe);
    });
    setRecipes(fetchedRecipes);
  };

  const addStep = () => {
    setSteps([...steps, { description: "", time: "", ingredients: [] }]);
  };

  const handleStepChange = (index: number, field: keyof Step, value: string) => {
    const updatedSteps = [...steps];
    if (field === "ingredients") {
      updatedSteps[index][field] = value.split(",").map((item) => item.trim());
    } else {
      updatedSteps[index][field] = value;
    }
    setSteps(updatedSteps);
  };

  const saveRecipe = async () => {
    await addDoc(collection(db, "recipes"), { name: recipeName, steps });
    setRecipeName("");
    setSteps([]);
    fetchRecipes();
  };

  return (
    <div className="app-container">
      <h1 className="title">🍲 Recipe Manager</h1>

      {/* Add New Recipe */}
      <div className="form-container">
        <h2>Add New Recipe</h2>
        <input
          type="text"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          className="input-field"
        />

        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <h3>Step {index + 1}</h3>
            <input
              type="text"
              placeholder="Step Description"
              className="input-field"
              onChange={(e) => handleStepChange(index, "description", e.target.value)}
            />
            <input
              type="text"
              placeholder="Time (e.g., 10 mins)"
              className="input-field"
              onChange={(e) => handleStepChange(index, "time", e.target.value)}
            />
            <input
              type="text"
              placeholder="Ingredients (comma-separated)"
              className="input-field"
              onChange={(e) => handleStepChange(index, "ingredients", e.target.value)}
            />
          </div>
        ))}

        <button onClick={addStep} className="btn add-step">+ Add Step</button>
        <button
          onClick={saveRecipe}
          disabled={recipeName === "" || steps.length === 0}
          className={`btn save-btn ${steps.length === 0 ? "disabled" : ""}`}
        >
          Save Recipe
        </button>
      </div>

      {/* Recipe List */}
      <h2>Available Recipes</h2>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            onClick={() => {
              setSelectedRecipe(recipe);
              setCurrentStep(0);
            }}
            className="recipe-item"
          >
            {recipe.name}
          </li>
        ))}
      </ul>

      {/* Display Recipe */}
      {selectedRecipe && (
        <div className="recipe-display">
          <h2>{selectedRecipe.name}</h2>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{
                width: `${((currentStep + 1) / selectedRecipe.steps.length) * 100}%`,
              }}
            ></div>
          </div>
          <div className="step-details">
            <h3>{selectedRecipe.steps[currentStep].description}</h3>
            <p>
              <strong>Time:</strong> {selectedRecipe.steps[currentStep].time} minutes
            </p>
            <div className="ingredients">
              <strong>Ingredients needed:</strong>
              <div>
                {selectedRecipe.steps[currentStep].ingredients.map((ingredient, index) => (
                  <span key={index} className="ingredient-badge">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="step-indicator">
            Step {currentStep + 1} of {selectedRecipe.steps.length}
          </div>

          <div className="nav-buttons">
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              disabled={currentStep === 0}
              className="btn"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={currentStep === selectedRecipe.steps.length - 1}
              className="btn primary-btn"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
