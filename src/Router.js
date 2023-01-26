import React from "react"
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom"
import { Home, Users } from "./pages"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
        </>
    )
)