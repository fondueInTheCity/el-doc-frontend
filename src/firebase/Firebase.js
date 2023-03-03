import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import axios from 'axios'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyD0ujeTPJBJU5ZZXIaLGwFAooXNg_S40dU',
  authDomain: 'el-doc-c418a.firebaseapp.com',
  projectId: 'el-doc-c418a',
  storageBucket: 'el-doc-c418a.appspot.com',
  messagingSenderId: '183676792053',
  appId: '1:183676792053:web:51991bf586d1bc19fda9bc',
  measurementId: 'G-B56M0BWS57',
}
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const createUser = async (email, password) => {
  const baseURL = 'http://localhost:3000/api/users'
  axios
    .post(baseURL, {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response)
    })
}

const signUp = async (name, email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    const user = result.user
    await updateProfile(user, { displayName: name })
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    })
    await createUser(email, password)
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}
const logOut = () => {
  signOut(auth)
}
export { auth, db, signIn, signUp, logOut }
