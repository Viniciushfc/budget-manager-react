import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCq5IYUQY7123wJLlK9debaAhYqfl7ZtpA",
  authDomain: "budget-manager-a72b9.firebaseapp.com",
  projectId: "budget-manager-a72b9",
  storageBucket: "budget-manager-a72b9.appspot.com",
  messagingSenderId: "125545359081",
  appId: "1:125545359081:web:aff48135c6dfb00c177278"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { db, auth, googleProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, app };


