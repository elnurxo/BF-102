import AdminRoot from "../pages/Admin/AdminRoot";
import Basket from "../pages/Main/Basket";
import EmployeeDetailAdmin from "../pages/Admin/EmployeeDetailAdmin";
import EmployeeDetailMain from "../pages/Main/EmployeeDetailMain";
import EmployeesMain from "../pages/Main/EmployeesMain";
import EmployeesAdmin from "../pages/Admin/EmployeesAdmin";
import Home from "../pages/Main/Home";
import MainRoot from "../pages/Main/MainRoot";
import NotFound from "../pages/Main/NotFound";
import AddEmployee from "../pages/Admin/AddEmployee";
import EditEmployee from "../pages/Admin/EditEmployee";
import AdminLogin from "../pages/Admin/AdminLogin";


export const ROUTES = [
    {
        path:'',
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element: <Home/>
            },
            {
                path:'/employees',
                element: <EmployeesMain/>
            },
            {
                path:'/employees/:id',
                element: <EmployeeDetailMain/>
            },
            {
                path:'*',
                element: <NotFound/>
            },
            {
                path:'/basket',
                element: <Basket/>
            }
        ]
    },
    {
        path:'/admin',
        element: <AdminRoot/>,
        children: [
            {
                path:'',
                element: <EmployeesAdmin/>
            },
            {
                path:'add-employee',
                element: <AddEmployee/>
            },
            {
                path:'employees/:id',
                element: <EmployeeDetailAdmin/>
            },
            {
                path:'employees/edit/:id',
                element: <EditEmployee/>
            },
            {
                path:'login',
                element: <AdminLogin/>
            }
        ]
    }
]