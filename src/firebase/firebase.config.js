// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQIk1_T6CKs8yJkteAX57n4bv4DP-HiYE",
  authDomain: "cars-doctor-fcca6.firebaseapp.com",
  projectId: "cars-doctor-fcca6",
  storageBucket: "cars-doctor-fcca6.appspot.com",
  messagingSenderId: "251929599559",
  appId: "1:251929599559:web:0ce2f31510625f641c5b62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;