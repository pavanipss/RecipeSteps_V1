// Install Firebase in your project if not already done.
// Run: npm install firebase

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJwVmZJg-3bJOw7hmRWeKD7XNpZGel2MQ",
  authDomain: "recipe-steps.firebaseapp.com",
  projectId: "recipe-steps",
  storageBucket: "recipe-steps.firebasestorage.app",
  messagingSenderId: "875755610280",
  appId: "1:875755610280:web:6b855785f00ff79412629d",
  measurementId: "G-EKJVW1X82C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Example CRUD functions
export const addRecipe = async (recipe: any) => {
  try {
    const docRef = await addDoc(collection(db, 'recipes'), recipe);
    console.log('Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getRecipe = async (id: string) => {
  try {
    const docRef = doc(db, 'recipes', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('No such document!');
    }
  } catch (e) {
    console.error('Error getting document: ', e);
  }
};

export const getAllRecipes = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'recipes'));
    const recipes: any[] = [];
    querySnapshot.forEach((doc) => {
      recipes.push({ id: doc.id, ...doc.data() });
    });
    return recipes;
  } catch (e) {
    console.error('Error getting documents: ', e);
  }
};

export const updateRecipe = async (id: string, updatedData: any) => {
  try {
    const docRef = doc(db, 'recipes', id);
    await setDoc(docRef, updatedData, { merge: true });
    console.log('Document updated!');
  } catch (e) {
    console.error('Error updating document: ', e);
  }
};
