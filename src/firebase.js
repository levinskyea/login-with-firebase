// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCpNwHZMoAuRe6TjYFJ2A-wyz6OZGIIRs",
  authDomain: "fir-admin-auth-994a4.firebaseapp.com",
  projectId: "fir-admin-auth-994a4",
  storageBucket: "fir-admin-auth-994a4.appspot.com",
  messagingSenderId: "231522065640",
  appId: "1:231522065640:web:76b1f2fb477f4aa1767d5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);