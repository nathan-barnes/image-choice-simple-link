// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbA_cpS6EHztzyQftBZifqTOSTeF7JSxA",
  authDomain: "barneshome-3dfbb.firebaseapp.com",
  projectId: "barneshome-3dfbb",
  storageBucket: "barneshome-3dfbb.appspot.com",
  messagingSenderId: "444159558348",
  appId: "1:444159558348:web:6d11bfd4edebc84789b869",
  measurementId: "G-VZR61HMQNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);