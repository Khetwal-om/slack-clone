import firebase from "firebase" 

const firebaseConfig = {
    apiKey: "AIzaSyD1AE8Jea-wwWbCjC1XgHJ07YiffFf64O0",
    authDomain: "slack-clone-b7534.firebaseapp.com",
    databaseURL: "https://slack-clone-b7534.firebaseio.com",
    projectId: "slack-clone-b7534",
    storageBucket: "slack-clone-b7534.appspot.com",
    messagingSenderId: "804957079509",
    appId: "1:804957079509:web:82a677b15a83d23becdf5c"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
const provider=new firebase.auth.GoogleAuthProvider()

export {auth,provider}
export default db