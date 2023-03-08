// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCz6z99LGXeyg_MOBktGYQ3SsIFqE9iHNE",
  authDomain: "productivity-web-app-c1320.firebaseapp.com",
  projectId: "productivity-web-app-c1320",
  storageBucket: "productivity-web-app-c1320.appspot.com",
  messagingSenderId: "482254525591",
  appId: "1:482254525591:web:d2653cedfab69d8d4c05d2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
