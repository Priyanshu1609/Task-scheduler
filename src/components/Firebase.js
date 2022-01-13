
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCQn81ORlMYLL9fr3JZDSNzkkObbT1M3dA",
  authDomain: "scheduler-d3519.firebaseapp.com",
  projectId: "scheduler-d3519",
  storageBucket: "scheduler-d3519.appspot.com",
  messagingSenderId: "561084236186",
  appId: "1:561084236186:web:d8f5365086a0c94a24fa23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db= getDatabase(app);

export const auth = getAuth(app);
