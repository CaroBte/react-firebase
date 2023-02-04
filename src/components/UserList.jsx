import React, { useContext } from 'react'
import UserCard from './UserCard'
import { users } from '../context'

const UserList = ({ list }) => {

    const { deleteUser } = useContext(users.UsersDispatcherContext)


    return (
        <div className="p-3 mt-1">
            <div className="mt-5 mb-3">
                <span> component: UserList.jsx</span>
                <span> aka lista de componentes</span>
            </div>
            {
                list && list.map((e) =>
                    <UserCard
                        key={e.id}
                        username={e.username}
                        name={e.name}
                        id={e.id}
                        age={e.age}
                        deleteUser={deleteUser} />

                )
            }
        </div>
    )
}

export default UserList
