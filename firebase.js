// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: env.apiKey,
  authDomain: "my-portfolio-dc499.firebaseapp.com",
  projectId: "my-portfolio-dc499",
  storageBucket: "my-portfolio-dc499.appspot.com",
  messagingSenderId: "636331673237",
  appId: "1:636331673237:web:394f40eb3688f343757d9c",
  measurementId: "G-V4M8Z2LXV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
