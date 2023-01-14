// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7i21ZxbFeHqe3VmvHKZUamlWu2h5-o_U",
  authDomain: "tepret-auto.firebaseapp.com",
  projectId: "tepret-auto",
  storageBucket: "tepret-auto.appspot.com",
  messagingSenderId: "271927163304",
  appId: "1:271927163304:web:cddd2e6df81b722ceb059d",
  measurementId: "G-D9YQHKHPZM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});