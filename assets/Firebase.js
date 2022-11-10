// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4FkV2Lsk2-9jZsNh4zlqc3pF4dM4_l_A",
  authDomain: "restaurant1-app.firebaseapp.com",
  projectId: "restaurant1-app",
  storageBucket: "restaurant1-app.appspot.com",
  messagingSenderId: "253786330574",
  appId: "1:253786330574:web:8856ac5eabc74d922f079f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth,db};