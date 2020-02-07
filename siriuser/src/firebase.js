import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD7_bPvT5h2rMlVMADZwvPJoaydPsUBnJ8",
    authDomain: "sirius-teste.firebaseapp.com",
    databaseURL: "https://sirius-teste.firebaseio.com",
    projectId: "sirius-teste",
    storageBucket: "sirius-teste.appspot.com",
    messagingSenderId: "191519287826",
    appId: "1:191519287826:web:ff81049899faf7bd2846cb",
    measurementId: "G-P0VE5ZVHE8"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;
