import AddProduct from "../pages/Admin/AddProduct";
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard";
import ProductDetail from "../pages/Admin/ProductDetail";
import Products from "../pages/Admin/Products";
import About from "../pages/Main/About";
import Contact from "../pages/Main/Contact";
import Home from "../pages/Main/Home";
import MainRoot from "../pages/Main/MainRoot";
import NotFound from "../pages/Main/NotFound";
import EditProduct from "../pages/Admin/EditProduct";

export const ROUTES = [
    //Main Root - user side
    {
        path:'/',
        element:<MainRoot/>,
        children: [
            {
                path:'',
                element: <Home/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    },
    //Admin Root - admin side
    {
        path: '/admin',
        element: <AdminRoot/>,
        children: [
            {
                path:'',
                element: <Dashboard/>
            },
            {
                path:'products',
                element:<Products/>
            },
            {
                path:'add-product',
                element:<AddProduct/>
            },
            {
                path:'products/:id',
                element: <ProductDetail/>
            },
            {
                path:'products/edit/:id',
                element: <EditProduct/>
            }
        ]
    }
]