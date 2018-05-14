import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCRlY97gkdfmZSKGmLhRkPoJXwC71Dwzoo",
    authDomain: "dryad-4afdc.firebaseapp.com",
    databaseURL: "https://dryad-4afdc.firebaseio.com",
    projectId: "dryad-4afdc",
    storageBucket: "dryad-4afdc.appspot.com",
    messagingSenderId: "399727809550"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth }