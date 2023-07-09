import React from 'react';
import ReactDOM from 'react-dom/client';
import {  BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import initializeApp from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA9sejPD9tr8rgvgluxgv_cS_P2qEbxyTg",
  authDomain: "url-shortener-de4fc.firebaseapp.com",
  projectId: "url-shortener-de4fc",
  storageBucket: "url-shortener-de4fc.appspot.com",
  messagingSenderId: "925197965707",
  appId: "1:925197965707:web:533e61a5ef4b8eab59378e",
  measurementId: "G-1F8TTDDN5S"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
