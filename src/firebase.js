// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWkNcMqSaSrrQG_gHAJD1n-ByK2lwPlko",
  authDomain: "twitter-clone-2a472.firebaseapp.com",
  projectId: "twitter-clone-2a472",
  storageBucket: "twitter-clone-2a472.appspot.com",
  messagingSenderId: "909839284769",
  appId: "1:909839284769:web:b6d4d4e9a9a051b9e58160",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
