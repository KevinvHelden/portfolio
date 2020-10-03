import { config } from "./config";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseInit = firebase.initializeApp(config);
const db = firebaseInit.firestore();

async function getUrl(folder, image) {
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const imageRef = storageRef.child(`${folder}/${image}`);
  return imageRef.getDownloadURL().catch(function (error) {
    console.log(error);
  });
}

async function getDocs(path) {
  const docArray = [];
  await db
    .collection(`${path}`)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        docArray.push(doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
    return docArray;
}

export { getUrl, firebaseInit, getDocs };
