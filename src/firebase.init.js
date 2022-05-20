// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDggnf4lKjfMZiPB3TSHGPMdDnqWHzRbvA",
  authDomain: "acinment-11.firebaseapp.com",
  projectId: "acinment-11",
  storageBucket: "acinment-11.appspot.com",
  messagingSenderId: "763921706789",
  appId: "1:763921706789:web:3a5e237212c19a0f4d74c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
