import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC7p6jPHpYuZ2lo3LLtCzrVccDtlGDBbhU",
  authDomain: "nextjs-devtter.firebaseapp.com",
  projectId: "nextjs-devtter",
  storageBucket: "nextjs-devtter.appspot.com",
  messagingSenderId: "17815410765",
  appId: "1:17815410765:web:52a5e08b58ea6216f4a404",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const mapUserFromFirebaseAuth = (user) => {
  const { displayName, email, photoURL, uid } = user
  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizeUser = user ? mapUserFromFirebaseAuth(user) : null
    onChange(normalizeUser)
  })
}

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}

export const addDevit = ({ avatar, content, img, userId, userName }) => {
  return db.collection("devit").add({
    avatar,
    content,
    img,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
    userId,
    userName,
  })
}

const mapDevitFromFirebaseToDevitObject = (doc) => {
  const data = doc.data()
  const id = doc.id
  const { createdAt } = data

  return {
    ...data,
    id,
    createdAt: +createdAt.toDate(),
  }
}

export const listenLatestDevits = (callback) => {
  return db
    .collection("devit")
    .orderBy("createdAt", "desc")
    .limit(20)
    .onSnapshot(({ docs }) => {
      const newDevits = docs.map(mapDevitFromFirebaseToDevitObject)
      callback(newDevits)
    })
}

// export const fetchLatestDevits = () => {
//   return db
//     .collection("devit")
//     .orderBy("createdAt", "desc")
//     .get()
//     .then(({ docs }) => {
//       return docs.map(mapDevitFromFirebaseToDevitObject)
//     })
// }

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`images/${file.name}`)
  const task = ref.put(file)
  return task
}
