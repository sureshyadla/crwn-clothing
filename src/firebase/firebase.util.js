import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDj5CNdEQfyTww9pwda_0SOkdbWYwaGZm4",
    authDomain: "crwn-db-94845.firebaseapp.com",
    databaseURL: "https://crwn-db-94845.firebaseio.com",
    projectId: "crwn-db-94845",
    storageBucket: "crwn-db-94845.appspot.com",
    messagingSenderId: "271128608436",
    appId: "1:271128608436:web:424afe59a09e2c9be361e1"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;