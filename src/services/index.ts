import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from '../config/env';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth();
export const db = firebase.firestore();
// Provider.addScope("https://www.googleapis.com/auth/contacts.readonly";
export * from "./teachers";
export * from "./classes";
export * from "./context/index";
export * from "./students";