// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Uncomment if using Firestore


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAooYRnMzjAUJ1k8vMgdL5zxhtAkhp2TU4",
  authDomain: "mvp-react-native.firebaseapp.com",
  projectId: "mvp-react-native",
  storageBucket: "mvp-react-native.firebasestorage.app",
  messagingSenderId: "364295423098",
  appId: "1:364295423098:web:f5c2f1f807a3e618c867c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Uncomment if using Firestore

export { auth, db };
export default app;