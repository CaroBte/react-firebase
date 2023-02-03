import React from 'react'
import { useForm } from 'react-hook-form';

const UserForm = ({ createNewUser }) => {

    const { register, handleSubmit, resetField, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        createNewUser(data)
        resetField("username")
        resetField("name")
        resetField("age")
    }

    return (
        <div className='mb-5'>
            <p className='mb-4'>UserForm.jsx component</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='form-control mb-2 w-25' type="text" name="username" placeholder="username" {...register("username", { required: true })} />
                {errors.username && <span>Please write your username</span>}
                <input className='form-control mb-2 w-25' type="text" name="name" placeholder="name" {...register("name", { required: true })} />
                {errors.name && <span>Please write your name</span>}
                <input className='form-control mb-2 w-25' type="number" name="age" placeholder="age" {...register("age", { required: true })} />
                {errors.age && <span>Please write your age</span>}
                <button className='btn btn-success' type="submit">Send</button>
            </form>
        </div>
    )
}

export default UserForm