// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence  } from "firebase/auth";
import {AsyncStorage} from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiS1jNOivPZmbrAZfmpPbjZmkFmGX8D58",
  authDomain: "ai-travel-planner-3367d.firebaseapp.com",
  projectId: "ai-travel-planner-3367d",
  storageBucket: "ai-travel-planner-3367d.firebasestorage.app",
  messagingSenderId: "78680888476",
  appId: "1:78680888476:web:e42594af4f0227eacc4959",
  measurementId: "G-BGSYC6E368"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
export const auth = getAuth(app);