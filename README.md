# Recipe Manager

This is a **Recipe Manager** application built using **React** and **Firebase Firestore**. It allows users to add, view, and navigate through step-by-step cooking instructions, including time and ingredient details.

---

## **Features**

1. Add new recipes with:
   - Recipe name
   - Steps (description, time, and ingredients).
2. Dynamic step navigation with **Next/Previous** buttons.
3. A progress bar to show current step completion.
4. Styled ingredients as badges.
5. Recipe list to view and select existing recipes.

---

## **Prerequisites**

Before running the project, ensure you have the following installed:

1. **Node.js** (LTS version)
   - Download: [Node.js Official Website](https://nodejs.org/)

2. **Firebase Account**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).

---

## **Firebase Setup**

1. Create a **Firebase project** in the Firebase Console.
2. Navigate to **Project Settings** > **General** > Add a web app.
3. Copy your Firebase configuration.

Example configuration:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
**## **Firebase Configuration****
Replace the configuration in the App.tsx file under this section:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};

Project Setup
Follow the steps below to download, set up, and run the project.

Clone the Repository:

git clone https://github.com/YOUR_GITHUB_USERNAME/recipe-manager.git
cd recipe-manager

Install Dependencies: Install all required dependencies using npm:
npm install

Install Firebase: Ensure Firebase is installed:
npm install firebase
Run the Project
To start the development server, run:

npm start

The application will open at:
http://localhost:3000

How to Use
Add a Recipe:

Enter the recipe name.
Click + Add Step to add steps with description, time, and ingredients.
Once steps are added, the "Save Recipe" button becomes enabled.
View Recipes:

The list of saved recipes will appear under "Available Recipes".
Click a recipe to view step-by-step details.
Navigate Steps:

Use the Next and Previous buttons to navigate through steps.
The progress bar dynamically updates.

Project Structure

recipe-manager/
├── public/           # Public files
├── src/
│   ├── App.tsx       # Main React Component
│   ├── App.css       # Stylesheet
│   └── index.tsx     # React entry point
├── package.json      # Project dependencies
└── README.md         # Project documentation
Troubleshooting
If you encounter any issues, ensure:

Node.js and npm are installed correctly.
Firebase configuration is properly set up.
Dependencies are installed using npm install.
Clear cache and reinstall dependencies if needed:


rm -rf node_modules
npm install
License
This project is licensed under the MIT License.

Contact
For any queries or contributions, feel free to reach out:

Email: yourname@example.com
GitHub: Your GitHub Profile
yaml
Copy code

---

## **How to Use the README**
1. Replace **YOUR_API_KEY**, **YOUR_PROJECT_ID**, etc., with your Firebase project details.
2. Replace placeholders like `YOUR_GITHUB_USERNAME` and `yourname@example.com` with your own details.
3. Commit and push the **README.md** file to your repository.

---

Now, you can:
1. Clone the repository.
2. Follow the steps in the **README**.
3. Set up Firebase and run the code easily every time! 🚀

