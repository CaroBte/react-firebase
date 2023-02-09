import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState } from "react";
import { set } from "react-hook-form";
import { firebase } from "../api"

export const authContext = createContext()

export const AuthProvider = (props) => {

    const [user, setUser] = useState()

    onAuthStateChanged(firebase.auth, (_user) => {
        if (_user) {
            firebase.createUser({
                name: _user.displayName,
                username: _user.email,
                age: _user.photoURL
            })
            setUser(_user)
        } else {
            setUser(null)
        }

    })



    return (
        <authContext.Provider value={{ user }}>
            {props.children}
        </authContext.Provider>
    )
}