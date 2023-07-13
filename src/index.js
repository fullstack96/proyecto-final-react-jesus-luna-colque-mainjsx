import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrSQ6t3K1ZejsrNV-ZIKNqzK6u_ZqsMk0",
  authDomain: "entregafinalwerle.firebaseapp.com",
  projectId: "entregafinalwerle",
  storageBucket: "entregafinalwerle.appspot.com",
  messagingSenderId: "774418612151",
  appId: "1:774418612151:web:4ff89625d5d8394f047232"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);