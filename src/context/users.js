import React, { createContext, useState } from 'react'
import { users as usersApi, firebase } from "../api"


export const UsersContext = createContext()
export const UsersDispatcherContext = createContext()

export const UsersProvider = ({ children }) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState({
        username: "",
        name: "",
        age: "",
    })

    const getData = async () => {
        try {
            setData(null)
            setIsLoading(true)
            const res = await firebase.getData()
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

    const sendUser = async (userData) => {
        try {
            setIsLoading(true)

            if (userData.id) {
                await usersApi.updateUser(userData.id, userData)
            } else {
                await usersApi.createUser(userData)
            }
            setIsLoading(false)
            await getData()
        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }
    }

    const getUserDetails = async (id) => {
        try {
            setIsLoading(true)
            const res = await usersApi.getUserDetails(id)
            setCurrentUser(res.data);
            setIsLoading(false)
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

    const state = { data, error, isLoading, currentUser }
    const dispatchers = { getData, deleteUser, sendUser, getUserDetails }

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