import { RouterProvider } from 'react-router';
import { router } from "./Router";
import { users } from "./context";

function App() {
  return (
    <users.UsersProvider>
      <RouterProvider router={router} />
    </users.UsersProvider>
  );
}

export default App;