import "./index.css";
import "./locales/index.ts";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6xXw-n2cFHLXy5uWDkUT2_o8JH4MIZ_k",
  authDomain: "cat-project-8d53e.firebaseapp.com",
  projectId: "cat-project-8d53e",
  storageBucket: "cat-project-8d53e.appspot.com",
  messagingSenderId: "274163013494",
  appId: "1:274163013494:web:0a9f87083f61611a5a4c57",
  measurementId: "G-8Y7R8FHEM5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
