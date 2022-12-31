import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

// TODO use env variables in production
const firebaseConfig = {
  apiKey: "AIzaSyC-BFFxhuVZtHd-TzDJ9HJI_f3XPQa2-A0",
  authDomain: "novace-24fb1.firebaseapp.com",
  projectId: "novace-24fb1",
  storageBucket: "novace-24fb1.appspot.com",
  messagingSenderId: "881003920985",
  appId: "1:881003920985:web:b2f94e507ca87fca0a3b48",
  measurementId: "G-DH40QRV2CW"
};


export let db = null;
export const initializeFirebase = () => {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  getStorage(app);

  if (typeof window !== 'undefined') {
    getAnalytics(app);
  }
};
