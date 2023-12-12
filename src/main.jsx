import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyBqAEaZiNGxGBt6XK9PpV70YVPcVDDvDDQ",
        authDomain: "havaianas-676f2.firebaseapp.com",
        projectId: "havaianas-676f2",
        storageBucket: "havaianas-676f2.appspot.com",
        messagingSenderId: "285063140176",
        appId: "1:285063140176:web:c1887e68375ad3b6175255"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
                <App />
        </React.StrictMode>,
)