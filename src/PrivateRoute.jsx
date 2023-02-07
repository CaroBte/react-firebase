import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { auth } from "./context"



export const PrivateRoute = () => {
    const { user } = useContext(auth.authContext)

    return (
        <>
            {user ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}




export default PrivateRoute