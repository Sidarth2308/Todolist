import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyCF-13awlQQEbGEesZi_dUNAK8crflR8gU",
    authDomain: "todolist-c917e.firebaseapp.com",
    projectId: "todolist-c917e",
    storageBucket: "todolist-c917e.appspot.com",
    messagingSenderId: "1071884701608",
    appId: "1:1071884701608:web:3080c2bb02c0f3f703179d"
  };

const firebase = Firebase.initializeApp(firebaseConfig);


export {firebase};