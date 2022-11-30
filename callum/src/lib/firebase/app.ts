// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHRGZyO7Q6TW1fHRgsIebXi2iFawUelwo",
  authDomain: "marle-weave.firebaseapp.com",
  projectId: "marle-weave",
  storageBucket: "marle-weave.appspot.com",
  messagingSenderId: "637767688548",
  appId: "1:637767688548:web:b3e4fce274d6af221a9a71",
  measurementId: "G-DF6GZ5376F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);
// export const storage = getStorage(app);
