import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCYJvCwvFVzrmU7SgdNyhwYTXV3NtYtc3g",
    authDomain: "fb-clone-1ce4b.firebaseapp.com",
    databaseURL: "https://fb-clone-1ce4b.firebaseio.com",
    projectId: "fb-clone-1ce4b",
    storageBucket: "fb-clone-1ce4b.appspot.com",
    messagingSenderId: "292419746664",
    appId: "1:292419746664:web:6f1e9b2606b2729ccb74dd",
    measurementId: "G-3RFSVBVBMD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;