import React, { createContext, useState } from 'react'
import { users as usersApi } from "../api"

export const UsersContext = createContext()
export const UsersDispatcherContext = createContext()

export const UsersProvider = ({ children }) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () => {
        try {
            setData(null)
            setIsLoading(true)
            const res = await usersApi.getUsers()
            setIsLoading(false)
            setData(res.data)
        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }
    }

    const deleteUser = async (userId) => {
        try {
            setIsLoading(true)
            await usersApi.deleteUser(userId)
            setIsLoading(false)
            await getData()
        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }
    }

    /*     const state = {
            data: data,
            error: error,
            isLoading: isLoading
        } */
    /*     const dispatchers = {
            getData: getData
        } */

    const state = { data, error, isLoading }
    const dispatchers = { getData, deleteUser }

    return (
        <>
            <UsersDispatcherContext.Provider value={dispatchers}>
                <UsersContext.Provider value={state}>
                    {children}
                </UsersContext.Provider>
            </UsersDispatcherContext.Provider>
        </>
    )
}