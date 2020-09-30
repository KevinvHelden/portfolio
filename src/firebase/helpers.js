import { config } from "./config";
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

async function getUrl(folder, image) {
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const imageRef = storageRef.child(`${folder}/${image}`);
  return imageRef.getDownloadURL().catch(function (error) {
    console.log(error);
  });
}

const firebaseInit = firebase.initializeApp(config);

export { getUrl, firebaseInit };
