import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5jOuIOF8qN79TtPHGwG9Jg1RoG6F-0gs",
  authDomain: "chat-bcf88.firebaseapp.com",
  projectId: "chat-bcf88",
  storageBucket: "chat-bcf88.appspot.com",
  messagingSenderId: "864481295993",
  appId: "1:864481295993:web:c3d727fbdbbd58ab175ea8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();