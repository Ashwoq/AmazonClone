// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { firebase } from "@firebase/app";
// import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJbJbJPbmEofivgRrsaVpzfyLS0OCL9mk",
  authDomain: "clone-b1e27.firebaseapp.com",
  projectId: "clone-b1e27",
  storageBucket: "clone-b1e27.appspot.com",
  messagingSenderId: "120280937117",
  appId: "1:120280937117:web:3c1eacca5cab24e4feda74",
  measurementId: "G-SME0BV5FSY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const analytics = getAnalytics(app);

export { db, auth };
