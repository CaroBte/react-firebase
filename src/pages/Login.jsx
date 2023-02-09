import React, { useContext } from 'react'
import { firebase } from '../api'
import { auth } from "../context"

const Login = () => {

    const { user } = useContext(auth.authContext)

    const handleClick = () => {
        firebase.login()
    }

    const handleLogout = () => {
        firebase.logout()
    }


    return (
        <>
            <div className='m-2'>
                <p>Login page</p>
                {user ?
                    <>
                        <h1>Logged as {user.displayName}</h1>
                        <img src={user.photoURL} alt="profile-pic" />
                        <button
                            className='btn btn-danger m-3'
                            onClick={handleLogout}>Logout
                        </button>
                    </>
                    : <button
                        className='btn btn-primary'
                        onClick={handleClick}>Login
                    </button>
                }
            </div>
        </>
    )
}

export default Login