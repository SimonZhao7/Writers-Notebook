// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmtl2vuo5SXrkljHNhJePCNq9RaavGOI0",
  authDomain: "writers-notebook-d88ea.firebaseapp.com",
  projectId: "writers-notebook-d88ea",
  storageBucket: "writers-notebook-d88ea.appspot.com",
  messagingSenderId: "879959678646",
  appId: "1:879959678646:web:dbeec69754e8a24f0c5017",
  measurementId: "G-0TG4T5TDK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);