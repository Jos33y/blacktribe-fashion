// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBM2mskDyXisehUM1kvECvhrO5w-2bNcas",
    authDomain: "blacktribefashion.firebaseapp.com",
    projectId: "blacktribefashion",
    storageBucket: "blacktribefashion.appspot.com",
    messagingSenderId: "178093147661",
    appId: "1:178093147661:web:e9eee51012e574b855b744",
    measurementId: "G-G06LHZMZ5B"
  };
  

// Initialize Firebase
 // eslint-disable-next-line
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
 // eslint-disable-next-line
const analytics = getAnalytics(app);