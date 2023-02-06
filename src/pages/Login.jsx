import React, { useState } from 'react'
import { firebase } from '../api'

const Login = () => {

    const [user, setUser] = useState('')

    const handleClick = async () => {
        const _user = await firebase.login()
        setUser(_user)
    }

    const handleLogout = () => {
        firebase.logout()
    }


    return (
        <> <div className='m-2'>
            <p>Login page</p>

            {user ? <>
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
                </button>}
        </div>
        </>
    )
}

export default Login