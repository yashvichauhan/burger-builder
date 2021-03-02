import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC45vp60SMhEsiZth4PYQSVjZpuzvGWuUM",
    authDomain: "yc-burger-app.firebaseapp.com",
    databaseURL: "https://yc-burger-app.firebaseio.com",
    projectId: "yc-burger-app",
    storageBucket: "yc-burger-app.appspot.com",
    messagingSenderId: "267365621773",
    appId: "1:267365621773:web:c94e34ab45e1bd9001b544",
    measurementId: "G-WQXTM728J9"
  };

  const fire =firebase.initializeApp(firebaseConfig)
  export default fire;