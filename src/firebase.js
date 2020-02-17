import firebase from "firebase/app";
import database from "firebase/database";

const config = {
  apiKey: "AIzaSyDeAM1Kvo997JYeKQmt20FGmPiUyNwpa5c",
  authDomain: "igor-izviekov.firebaseapp.com",
  databaseURL: "https://igor-izviekov.firebaseio.com",
  projectId: "igor-izviekov",
  storageBucket: "igor-izviekov.appspot.com",
  messagingSenderId: "350865337503",
  appId: "1:350865337503:web:8ebcb2677a4349d663c6aa",
  measurementId: "G-4745QKQWFH"
};

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;

  return firebase;
};
