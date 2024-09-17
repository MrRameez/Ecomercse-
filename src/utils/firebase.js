import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCvK3eXpHbvhttWIhVuvi8_PkZra88cuwc",
  authDomain: "ecomerse-642ae.firebaseapp.com",
  projectId: "ecomerse-642ae",
  storageBucket: "ecomerse-642ae.appspot.com",
  messagingSenderId: "1078438368078",
  appId: "1:1078438368078:web:9616aab88dd0ef4d87c41f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {app, db, storage, analytics, auth};