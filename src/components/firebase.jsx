// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU_309pq1hCOS3g2Y6rQnEFzq3Je_Yilw",
  authDomain: "bhardwajbrotherstechhub.firebaseapp.com",
  projectId: "bhardwajbrotherstechhub",
  storageBucket: "bhardwajbrotherstechhub.firebasestorage.app",
  messagingSenderId: "122721831748",
  appId: "1:122721831748:web:39ebfc6c7ba3160fc96511",
  measurementId: "G-ZY7JXQETVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);