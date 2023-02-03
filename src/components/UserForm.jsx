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
        <div>
            UserForm.jsx component
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="username" placeholder="username" {...register("username", { required: true })} />
                {errors.username && <span>Please write your username</span>}
                <input type="text" name="name" placeholder="name" {...register("name", { required: true })} />
                {errors.name && <span>Please write your name</span>}
                <input type="number" name="age" placeholder="age" {...register("age", { required: true })} />
                {errors.age && <span>Please write your age</span>}
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default UserForm