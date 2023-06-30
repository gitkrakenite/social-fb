import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// process.env.REACT_APP_FIREBASE_KEY
const firebaseConfig = {
  apiKey: "AIzaSyB3WQXb9koag0PwQdBe4zvTTm_AgWVYPe4",
  authDomain: "chat-374cd.firebaseapp.com",
  projectId: "chat-374cd",
  storageBucket: "chat-374cd.appspot.com",
  messagingSenderId: "806611449364",
  appId: "1:806611449364:web:640814249825c556275901",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
