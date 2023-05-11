import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AdminUserContext = createContext();

export const AdminUserContextProvider = ({children}) =>{
    //admin user state
    const[admin,setAdmin] = useState(null);
    const[adminLocal,setAdminLocal] = useLocalStorage("admin",null);

    const values = {admin, setAdmin, adminLocal, setAdminLocal };

    return (
        <AdminUserContext.Provider value={values}>
            {children}
        </AdminUserContext.Provider>
    )
}

export const useAdminContext = ()=> useContext(AdminUserContext);