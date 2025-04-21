
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI69K4mJiehPSbuKKQF_-BwDaoiU21QUY",
  authDomain: "foundit-5c7d1.firebaseapp.com",
  projectId: "foundit-5c7d1",
  storageBucket: "foundit-5c7d1.firebasestorage.app",
  messagingSenderId: "144915103778",
  appId: "1:144915103778:web:79c765a22342ce29008a7b",
  measurementId: "G-6DH5Q824RL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

// Configure Google provider
googleProvider.setCustomParameters({
  prompt: 'select_account'
});
