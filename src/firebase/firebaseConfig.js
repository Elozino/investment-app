import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// console.log(import.meta.env)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmz8fTUONtjNKDkuET9kmwCzsrW7D3ye4",
  authDomain: "tradefirm-db4e8.firebaseapp.com",
  projectId: "tradefirm-db4e8",
  storageBucket: "tradefirm-db4e8.appspot.com",
  messagingSenderId: "695017207713",
  appId: "1:695017207713:web:666f39f6c79a2e94e37de0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)