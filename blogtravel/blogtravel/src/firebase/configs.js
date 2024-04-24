import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKhvZdAaqT37dEXeSdoRNxlEjjQQBO-L4",
  authDomain: "miniblog-801d9.firebaseapp.com",
  projectId: "miniblog-801d9",
  storageBucket: "miniblog-801d9.appspot.com",
  messagingSenderId: "129826257730",
  appId: "1:129826257730:web:b3e88a3b41d03a177566db"
};

const db = getFirestore(app);
const app = initializeApp(firebaseConfig);

export {db};