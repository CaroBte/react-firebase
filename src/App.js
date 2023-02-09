import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from "./Router";
import { users, auth } from "./context";

const App = () => {

  return (
    <>
      <auth.AuthProvider>
        <users.UsersProvider>
          <RouterProvider router={router} />
        </users.UsersProvider>
      </auth.AuthProvider>
    </>
  );
}

export default App;