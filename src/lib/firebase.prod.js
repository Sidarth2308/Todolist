import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

var firebaseConfig = {
    // Enter your firebase config here
  };

const firebase = Firebase.initializeApp(firebaseConfig);


export {firebase};