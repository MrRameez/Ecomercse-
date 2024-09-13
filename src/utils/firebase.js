import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";





const firebaseConfig = {
  apiKey: "AIzaSyD5RnRlpe5ytjZ9jeAP6FLedkU3YwMt5QQ",
  authDomain: "e-commerce-d7527.firebaseapp.com",
  projectId: "e-commerce-d7527",
  storageBucket: "e-commerce-d7527.appspot.com",
  messagingSenderId: "618079184863",
  appId: "1:618079184863:web:2c1acf9d5762d77f93466a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {app, db, storage, analytics, auth};