import { Recipe } from '../types';

export const sambarRecipe: Recipe = {
  title: "South Indian Sambar",
  totalTime: "45 minutes",
  servings: 4,
  steps: [
    {
      id: 1,
      title: "Cook Toor Dal",
      instruction: "Add Toor Dal and Water into a pressure cooker. Cook for 3 whistles. Mash the dal and set aside.",
      timer: 900, // 15 minutes
      ingredients: [
        { name: "Toor Dal", amount: "1 Cup" },
        { name: "Water", amount: "2 Cups" }
      ]
    },
    {
      id: 2,
      title: "Prepare Tamarind Water",
      instruction: "Soak Tamarind in Warm Water for 10 minutes. Extract tamarind juice and set aside.",
      timer: 600, // 10 minutes
      ingredients: [
        { name: "Tamarind", amount: "Small lemon-sized ball" },
        { name: "Warm Water", amount: "1/4 Cup" }
      ]
    },
    {
      id: 3,
      title: "Cook Vegetables",
      instruction: "Add Vegetables, Turmeric Powder, and Water to a pot. Boil until vegetables are soft.",
      timer: 600, // 10 minutes
      ingredients: [
        { name: "Mixed Vegetables", amount: "1 Cup" },
        { name: "Turmeric Powder", amount: "1/4 Teaspoon" },
        { name: "Water", amount: "1 Cup" }
      ]
    },
    {
      id: 4,
      title: "Mix Tamarind Juice and Sambar Powder",
      instruction: "Add Tamarind Juice and Sambar Powder to the cooked vegetables. Simmer for 5 minutes.",
      timer: 300, // 5 minutes
      ingredients: [
        { name: "Sambar Powder", amount: "2 Tablespoons" }
      ]
    },
    {
      id: 5,
      title: "Add Cooked Dal",
      instruction: "Add the mashed dal to the pot. Add Salt to taste. Simmer for 5-7 minutes, adjusting consistency with water if needed.",
      timer: 420, // 7 minutes
      ingredients: [
        { name: "Salt", amount: "To Taste" }
      ]
    },
    {
      id: 6,
      title: "Tempering",
      instruction: "Heat Oil in a pan. Add Mustard Seeds, Curry Leaves, Dry Red Chili, and Asafoetida (Hing). Let the seeds splutter.",
      timer: 180, // 3 minutes
      ingredients: [
        { name: "Oil", amount: "2 Tablespoons" },
        { name: "Mustard Seeds", amount: "1 Teaspoon" },
        { name: "Curry Leaves", amount: "6-8 Leaves" },
        { name: "Dry Red Chili", amount: "2 Pieces" },
        { name: "Asafoetida", amount: "A Pinch" }
      ]
    },
    {
      id: 7,
      title: "Combine and Serve",
      instruction: "Pour the tempering over the Sambar. Mix well and simmer for 2 minutes. Serve hot with rice or idli.",
      timer: 120, // 2 minutes
    }
  ]
};