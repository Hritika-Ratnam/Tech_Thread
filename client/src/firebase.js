// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY , // need to hide the api key
  authDomain: "mern-blog-3bbff.firebaseapp.com",
  projectId: "mern-blog-3bbff",
  storageBucket: "mern-blog-3bbff.appspot.com",
  messagingSenderId: "480992390083",
  appId: "1:480992390083:web:ea0b832c06dcdc6b49eb76"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);