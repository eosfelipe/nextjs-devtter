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

const db = firebase.firestore();

const mapUserFromFirebaseAuth = (user) => {
  const { displayName, email, photoURL, uid } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizeUser = user ? mapUserFromFirebaseAuth(user) : null;
    onChange(normalizeUser);
  });
};

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};

export const addDevit = ({ avatar, content, userId, userName }) => {
  return db.collection("devit").add({
    avatar,
    content,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
    userId,
    userName,
  });
};
