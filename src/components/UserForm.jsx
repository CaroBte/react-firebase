import React from 'react'
import { useForm } from 'react-hook-form';

const UserForm = ({ sendUser, initialValues }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        values: initialValues
    });

    const handleReset = () => {
        return {
            username: "",
            name: "",
            age: ""
        }
    }

    const onSubmit = (data) => {
        sendUser(data)
        reset(handleReset)
    }

    return (
        <div className='mb-5'>
            <p className='mb-4'>UserForm.jsx component</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='form-control mb-2 w-25' type="text" name="username" placeholder="username" {...register("username", { required: true })} />
                {errors.username && <span>Please write your username</span>}
                <input className='form-control mb-2 w-25' type="text" name="name" placeholder="name" {...register("name", { required: true })} />
                {errors.name && <span>Please write your name</span>}
                <input className='form-control mb-2 w-25' type="text" name="age" placeholder="age" {...register("age", { required: true })} />
                {errors.age && <span>Please write your age</span>}
                <button className='btn btn-success' type="submit">Send</button>
            </form>
        </div>
    )
}

export default UserForm