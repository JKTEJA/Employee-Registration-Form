import  firebase from 'firebase'
import 'firebase/auth';
import 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyD_j1LhcjsuA5JuIR0rmn_3Tm6nRAvBRIo",
    authDomain: "react-crud-cc10b.firebaseapp.com",
    databaseURL: "https://react-crud-cc10b-default-rtdb.firebaseio.com",
    projectId: "react-crud-cc10b",
    storageBucket: "react-crud-cc10b.appspot.com",
    messagingSenderId: "215700744887",
    appId: "1:215700744887:web:976238b4da1de216753b32"
  };
  // Initialize Firebase
  const firebaseDB=firebase.initializeApp(firebaseConfig);
  export default firebaseDB.database().ref();

