// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwuAlu8ZDAMIdSblybxFtQ3Z6tPYT8RQM",
  authDomain: "netflix-gpt-59784.firebaseapp.com",
  projectId: "netflix-gpt-59784",
  storageBucket: "netflix-gpt-59784.appspot.com",
  messagingSenderId: "810137523478",
  appId: "1:810137523478:web:359355d93ad90331336c37",
  measurementId: "G-GHD2F31VY3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()