// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCKa-dleJv68Myj6v7Xs8P5wxBgJqoyydQ',
  authDomain: 'next-portfolio-28d3e.firebaseapp.com',
  projectId: 'next-portfolio-28d3e',
  storageBucket: 'next-portfolio-28d3e.appspot.com',
  messagingSenderId: '1030667861058',
  appId: '1:1030667861058:web:ea5e32d9a31217e3e481db',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
