import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { UserForm } from '../components/'
import { users } from "../context"


const CreateUsers = () => {

    const { id } = useParams()
    const { sendUser, getUserDetails } = useContext(users.UsersDispatcherContext)
    const { currentUser } = useContext(users.UsersContext)

    useEffect(() => {
        if (id) {
            getUserDetails(id)
        }
    }, [id])



    return (

        <div>
            <h3>CreateUsers container</h3>
            <UserForm sendUser={sendUser} initialValues={currentUser} />
        </div>
    )
}

export default CreateUsers