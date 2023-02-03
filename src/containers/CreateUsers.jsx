import React, { useContext } from 'react'
import UserForm from '../components/UserForm'
import { users } from "../context"


const CreateUsers = () => {

    const { createNewUser } = useContext(users.UsersDispatcherContext)

    return (
        <div>CreateUsers container
            <UserForm createNewUser={createNewUser} />
        </div>
    )
}

export default CreateUsers