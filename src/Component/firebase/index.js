import firebase from 'firebase/app';
import '@firebase/storage';
/*
import '@firebase/firestore';
import '@firebase/auth';

*/


const firebaseConfig = {
    apiKey: "AIzaSyDzUpwopPu-ccIBgTIBaa0f4s7Fh8_mOjg",
    authDomain: "ott-accounts.firebaseapp.com",
    databaseURL: "https://ott-accounts.firebaseio.com",
    projectId: "ott-accounts",
    storageBucket: "ott-accounts.appspot.com",
    messagingSenderId: "1068795652992",
    appId: "1:1068795652992:web:b0b07c055ca1b304c42f65",
    measurementId: "G-LE7MFNM9QZ"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export { storage, firebase as default};

  


