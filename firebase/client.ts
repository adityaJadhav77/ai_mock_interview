// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSsb-hu-tjvC3PMh7cm6iN8-wcjZ9pTsA",
  authDomain: "prepai-ca732.firebaseapp.com",
  projectId: "prepai-ca732",
  storageBucket: "prepai-ca732.firebasestorage.app",
  messagingSenderId: "47056800579",
  appId: "1:47056800579:web:7d7490b658e67147847df6",
  measurementId: "G-NV1LY562MC",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
