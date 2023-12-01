// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmrZqwa7tEKugRGpaVs8iW_Uhf8tuydUs",
  authDomain: "snow-shop-6f3ed.firebaseapp.com",
  databaseURL:
    "https://snow-shop-6f3ed-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "snow-shop-6f3ed",
  storageBucket: "snow-shop-6f3ed.appspot.com",
  messagingSenderId: "409987710803",
  appId: "1:409987710803:web:a5a2e0c7f3f78c0baa6ba6",
  measurementId: "G-D0KHP6T11X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
