
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBjZ_aYah1rWSF0Eti2RusA2VVX6Pbzb98",
  authDomain: "scheduler-1c923.firebaseapp.com",
  projectId: "scheduler-1c923",
  storageBucket: "scheduler-1c923.appspot.com",
  messagingSenderId: "355272456192",
  appId: "1:355272456192:web:4d73b7266a69add56900e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db= getDatabase(app);

export const auth = getAuth(app);
