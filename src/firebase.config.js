import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOpp3PTei7UXAGvvsjKGX8nJiecmMUXWc",
  authDomain: "house-marketplace-app-33587.firebaseapp.com",
  projectId: "house-marketplace-app-33587",
  storageBucket: "house-marketplace-app-33587.appspot.com",
  messagingSenderId: "823840894375",
  appId: "1:823840894375:web:5ff1fb2f9af24d54c4da82",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
