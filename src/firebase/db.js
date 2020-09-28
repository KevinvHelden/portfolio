import { config } from "./config";
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(config);

const db = firebase.firestore();

export default db;