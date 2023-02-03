import React from 'react'
import { CreateUsers, GetUsers } from "../containers";

const Users = () => {
    return (
        <>
            <div>Users pages
                <CreateUsers />
                <GetUsers />
            </div>
        </>
    )
}


export default Users