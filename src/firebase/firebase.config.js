// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAecDiXfWnWnaCjckPJJiTaWdFG3MQYPEg",
  authDomain: "travel-guru-f6233.firebaseapp.com",
  projectId: "travel-guru-f6233",
  storageBucket: "travel-guru-f6233.appspot.com",
  messagingSenderId: "212226079704",
  appId: "1:212226079704:web:a100c424578acd3ddfd0ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);