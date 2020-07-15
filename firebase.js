import firebase from "firebase/app";
import { firebaseConfig } from "./config";

// const firebaseConfig = firebaseKey;

export const firebaseapp = firebase.initializeApp(firebaseConfig);
