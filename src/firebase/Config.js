// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxzGcXwPLlrCdfkWiqCj50WSdH4XDKZcE",
  authDomain: "portfolio-6f868.firebaseapp.com",
  projectId: "portfolio-6f868",
  storageBucket: "portfolio-6f868.firebasestorage.app",
  messagingSenderId: "583159668180",
  appId: "1:583159668180:web:34967a63f528b530b48a41",   
  measurementId: "G-MS04D5W7PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);