// utils/auth.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function register(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await AsyncStorage.setItem('user', JSON.stringify(userCredential.user));
    return userCredential.user;
  } catch (error) {
    throw error;
  }
}

export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    await AsyncStorage.setItem('user', JSON.stringify(userCredential.user));
    return userCredential.user;
  } catch (error) {
    throw error;
  }
}

export async function logout() {
  await signOut(auth);
  await AsyncStorage.removeItem('user');
}
