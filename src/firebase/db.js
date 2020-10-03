import { config } from "./config";
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseInit = firebase.initializeApp(config);
const db = firebaseInit.firestore();

export default db;