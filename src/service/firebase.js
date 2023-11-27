// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1h26pk05oN8AxyzzBIL3RCU_XvkGu5EM",
  authDomain: "bugarin-website.firebaseapp.com",
  projectId: "bugarin-website",
  storageBucket: "bugarin-website.appspot.com",
  messagingSenderId: "241583352171",
  appId: "1:241583352171:web:ad6236fafdcaa7aa16442e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)