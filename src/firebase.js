// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD70OCFfJ6Hr4iQgZfRsjaLKYJYurPS2d4",
  authDomain: "chat-app-4af8d.firebaseapp.com",
  projectId: "chat-app-4af8d",
  storageBucket: "chat-app-4af8d.appspot.com",
  messagingSenderId: "326390535136",
  appId: "1:326390535136:web:b58babbedf7a90c16f5185"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)