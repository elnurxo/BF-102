import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ROUTES } from "./routes/routes"
import { UserContextProvider } from "./context/UserContext";

const routes = createBrowserRouter(ROUTES);

function App() {

  return (
    <UserContextProvider>
      <RouterProvider router={routes}/>
    </UserContextProvider>
  )
}

export default App
