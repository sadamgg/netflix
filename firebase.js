import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBsobw3gmEuOOElfoulBcsqdksFGU8hP4I",
    authDomain: "netflix-clone-40c22.firebaseapp.com",
    projectId: "netflix-clone-40c22",
    storageBucket: "netflix-clone-40c22.appspot.com",
    messagingSenderId: "115789786900",  
    appId: "1:115789786900:web:f10b31a5fbce6925bb9c01",
    measurementId: "G-4MDL097PZP"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = firebase.auth();

  export{ auth };

  export default db;
