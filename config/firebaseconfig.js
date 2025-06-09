// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

export { auth };
export default app;