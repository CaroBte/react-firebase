import React from "react";
import { Home, Users, Login } from "./pages";
import { Navbar } from "./layout";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Navbar />} >
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/users/*" element={<Users />} />
                    <Route path="/users/:id/*" element={<Users />} />
                </Route>
            </Route>
        </>
    )
)