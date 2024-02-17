import firebase from "firebase/compat/app";
//auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFo-6dRU0-3F7Mh2_2JKJ62ASMM8YJKDg",
  authDomain: "clone-775f8.firebaseapp.com",
  projectId: "clone-775f8",
  storageBucket: "clone-775f8.appspot.com",
  messagingSenderId: "73193332144",
  appId: "1:73193332144:web:ee4ea3b6f55e741824ca75",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
