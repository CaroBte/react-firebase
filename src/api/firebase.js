import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { getFirestore, getDocs, collection, addDoc, doc, deleteDoc, setDoc, getDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkBMNNJ0Kot6XS1wnvmY4hyRBzID0B7bY",
    authDomain: "deploys-bootcamp-df68e.firebaseapp.com",
    projectId: "deploys-bootcamp-df68e",
    storageBucket: "deploys-bootcamp-df68e.appspot.com",
    messagingSenderId: "148848576163",
    appId: "1:148848576163:web:b7f578a11a727350576116"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const userCollection = collection(db, "users")
const auth = getAuth(app)
const authProvider = new GoogleAuthProvider()

//Login

export const login = async () => {
    authProvider.setCustomParameters({ prompt: "select_account" })
    const res = await signInWithPopup(auth, authProvider)
    return res.user
}

//Logout

export const logout = async () => await signOut(auth)

//CRUD functions
export const getData = async () => {
    const snapshot = await getDocs(userCollection)
    const data = []
    snapshot.forEach(d => {
        const user = d.data()
        user.id = d.id
        data.push(user)
        /*  data.push({ ...user, id }) */
    })
    return { data }

}

export const createUser = async ({ name, username, age }) => await addDoc(userCollection, { name, username, age })

export const deleteUser = async (id) => await deleteDoc(doc(userCollection, id))

export const updateUser = async (id, newUser) => {
    console.log("actualizando...", newUser)
    await setDoc(doc(userCollection, id), newUser)
}

export const getUserDetails = async (id) => {
    const snapshot = await getDoc(doc(userCollection, id))
    const user = snapshot.data()
    user.id = snapshot.id
    return { data: user }
}