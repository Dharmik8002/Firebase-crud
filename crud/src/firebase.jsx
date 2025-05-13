// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq9yl8BxHrs8rNje0Xn_GoktLBqN0_zIQ",
  authDomain: "crud-5055a.firebaseapp.com",
  projectId: "crud-5055a",
  storageBucket: "crud-5055a.firebasestorage.app",
  messagingSenderId: "752359928423",
  appId: "1:752359928423:web:4342d4aeaa0963a23b9ac2",
  measurementId: "G-L95GK705VJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireDB = getFirestore(app);
