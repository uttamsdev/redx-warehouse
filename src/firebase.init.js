// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbSgWsXxTE5Zpkj7s_Oxc25X4gqZV5u8U",
  authDomain: "redx-warehouse.firebaseapp.com",
  projectId: "redx-warehouse",
  storageBucket: "redx-warehouse.appspot.com",
  messagingSenderId: "121029060713",
  appId: "1:121029060713:web:42fd8c5a42c596a4a05af8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;