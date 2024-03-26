// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBilE5AlMcgBQxPwyhAAE7d6-gYf9Z_9qc",
  authDomain: "mygpt-845e2.firebaseapp.com",
  projectId: "mygpt-845e2",
  storageBucket: "mygpt-845e2.appspot.com",
  messagingSenderId: "861971306317",
  appId: "1:861971306317:web:70821a669d9522ef95c904",
  measurementId: "G-QS9W6TTQGJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
