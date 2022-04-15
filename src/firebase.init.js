// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfw2Ltsbc9eubcuM7BFZ9RtPAMaKOqmqY",
  authDomain: "ema-john-simple-4b890.firebaseapp.com",
  projectId: "ema-john-simple-4b890",
  storageBucket: "ema-john-simple-4b890.appspot.com",
  messagingSenderId: "649396360366",
  appId: "1:649396360366:web:8618e278e86c380db9093f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;