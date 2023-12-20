// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD07-4qB2__e2z1Tp4_7qOnhtsVqN1T8hY",
  authDomain: "task-management-system-afaf5.firebaseapp.com",
  projectId: "task-management-system-afaf5",
  storageBucket: "task-management-system-afaf5.appspot.com",
  messagingSenderId: "563632758614",
  appId: "1:563632758614:web:96f98eec6a6af2864180f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
