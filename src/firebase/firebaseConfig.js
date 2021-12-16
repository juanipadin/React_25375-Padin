import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyCHvrHFe4J3xvayoRCfBb2qXTfHbA-cCYM",
  authDomain: "bike-9a201.firebaseapp.com",
  projectId: "bike-9a201",
  storageBucket: "bike-9a201.appspot.com",
  messagingSenderId: "368259460704",
  appId: "1:368259460704:web:23c3c4396e618d06f29d05"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);