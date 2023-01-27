import React from 'react'

const UserList = ({ data }) => {
    return (
        <>
            {
                data && data.map(e => <p key={e.id}>Hola, {e.username} </p>)
            }
        </>
    )
}

export default UserList
