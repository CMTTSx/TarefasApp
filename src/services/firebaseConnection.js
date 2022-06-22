import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCk7V0FEn0vzEJfA1Uo-Dlta0zGe1c2aCg",
    authDomain: "tarefas-c78ca.firebaseapp.com",
    databaseURL: "https://tarefas-c78ca-default-rtdb.firebaseio.com",
    projectId: "tarefas-c78ca",
    storageBucket: "tarefas-c78ca.appspot.com",
    messagingSenderId: "496635621425",
    appId: "1:496635621425:web:93da9a7d2e034c57826510"
}

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;