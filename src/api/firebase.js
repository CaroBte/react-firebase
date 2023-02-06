import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore"

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

export const getData = async () => {
    const snapshot = await getDocs(userCollection)
    const data = []
    snapshot.forEach(doc => {
        const user = doc.data()
        user.id = doc.id
        data.push(user)
        /*  data.push({ ...user, id }) */
    })
    console.log(data);
    return { data }

}

export const createUser = async (newUser) => await addDoc(userCollection, newUser)
