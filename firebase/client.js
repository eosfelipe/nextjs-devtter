import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7p6jPHpYuZ2lo3LLtCzrVccDtlGDBbhU",
  authDomain: "nextjs-devtter.firebaseapp.com",
  projectId: "nextjs-devtter",
  storageBucket: "nextjs-devtter.appspot.com",
  messagingSenderId: "17815410765",
  appId: "1:17815410765:web:52a5e08b58ea6216f4a404",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuth = (user) => {
  const { displayName, email, photoURL } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizeUser = mapUserFromFirebaseAuth(user);
    onChange(normalizeUser);
  });
};

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};
