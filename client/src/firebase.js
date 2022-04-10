// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3HNoaobysPXSbD1P5bKXZMW1kOLI1rt4",
  authDomain: "pet-project-shop.firebaseapp.com",
  projectId: "pet-project-shop",
  storageBucket: "pet-project-shop.appspot.com",
  messagingSenderId: "139143840862",
  appId: "1:139143840862:web:7f8ad7b80c075fb2fca0cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;