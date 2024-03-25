import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1goHK6ywvxbJWpyi7OB9dmOS6hPgCjk0",
  authDomain: "allpointscrashapp.firebaseapp.com",
  projectId: "allpointscrashapp",
  storageBucket: "allpointscrashapp.appspot.com",
  messagingSenderId: "252342899030",
  appId: "1:252342899030:web:ee3eb60fd0adbc683146f7",
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const auth = getAuth(app);