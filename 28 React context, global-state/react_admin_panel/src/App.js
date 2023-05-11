import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes/routes";

const router = createBrowserRouter(ROUTES);

function App() {
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
