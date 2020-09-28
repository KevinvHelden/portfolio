import db from "../db";
const firebase = require("firebase");
const storage = firebase.storage();
const storageRef = storage.ref();

function getImage(folder, image) {
  const imageRef = storageRef.child(`${folder}/${image}`);

  imageRef
    .getDownloadURL()
    .then(function (url) {
      return url;
    })
    .catch(function (error) {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/object-not-found":
          // File doesn't exist
          break;

        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;

        case "storage/canceled":
          // User canceled the upload
          break;
        case "storage/unknown":
          // Unknown error occurred, inspect the server response
          break;
      }
    });
}

export default getImage;
