import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAHsTM3BEHPaCUZzvnlL2DV9xclmschmuY",
    authDomain: "crwn-db-2c426.firebaseapp.com",
    databaseURL: "https://crwn-db-2c426.firebaseio.com",
    projectId: "crwn-db-2c426",
    storageBucket: "crwn-db-2c426.appspot.com",
    messagingSenderId: "634335110159",
    appId: "1:634335110159:web:55d4c359e8c45739a96f7a",
    measurementId: "G-SZ4TGD3C7C"
  };

  firebase.initializeApp(config);
//   firebase.analytics();

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : "select_account"});

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;