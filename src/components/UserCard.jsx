import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({ username, name, id, age, deleteUser }) => {
    const LINK_ADDRESS = `/users/${id}`

    const handleDelete = () => {
        return deleteUser(id)
    }

    return (
        <div className="card mb-2 w-50">
            <div className="card-body">
                <h5 className="card-title">
                    {username}
                </h5>
                <p className="card-text">
                    {name} y tengo el id: {id}
                </p>
                <p className="card-text">
                    edad: {age}
                </p>
                <Link className='btn btn-primary' to={LINK_ADDRESS} >
                    Editar
                </Link>
                <button onClick={handleDelete} className="btn btn-danger">
                    eliminar
                </button>
            </div>
        </div>
    )

}

export default UserCard