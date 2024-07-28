// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALXmMc16i87cZcr5Sl4f87dXpKpshUYms",
  authDomain: "grow-up-c7035.firebaseapp.com",
  projectId: "grow-up-c7035",
  storageBucket: "grow-up-c7035.appspot.com",
  messagingSenderId: "178328460728",
  appId: "1:178328460728:web:a49caea80ef629596c434d",
  measurementId: "G-7XSRL1LV7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);