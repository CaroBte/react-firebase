import React, { useContext, useEffect } from 'react'
import { users } from "../context"
import { UserList } from '../components'

const GetUsers = () => {
    const { getData } = useContext(users.UsersDispatcherContext)
    const { data, error, isLoading } = useContext(users.UsersContext)

    useEffect(() => {
        if (!data) {
            getData()
        }

    }, [data])


    return (
        <>
            <div>
                <h4>GetUsers container</h4>
                <UserList list={data} />
                <p>error: {error}</p>
                <p>isLoading: {String(isLoading)}</p>
            </div>
        </>

    )
}

export default GetUsers 