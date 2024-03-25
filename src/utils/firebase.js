// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiEyPfppoI1svicl41cRIdiogHPLjn2K0",
  authDomain: "netflixgpt-29f3a.firebaseapp.com",
  projectId: "netflixgpt-29f3a",
  storageBucket: "netflixgpt-29f3a.appspot.com",
  messagingSenderId: "464605538581",
  appId: "1:464605538581:web:6123879304a9ca353ba11c",
  measurementId: "G-WXVT38LTPR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
