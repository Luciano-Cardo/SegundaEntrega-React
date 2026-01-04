import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhu3Bw6-d2U_T8C7WQkXCijrJ8YmzVLl8",
  authDomain: "e-commerce-lc.firebaseapp.com",
  projectId: "e-commerce-lc",
  storageBucket: "e-commerce-lc.firebasestorage.app",
  messagingSenderId: "762384415220",
  appId: "1:762384415220:web:6474142810a70f7a7de1a1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)