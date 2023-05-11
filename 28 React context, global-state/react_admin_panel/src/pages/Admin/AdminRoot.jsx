import { Outlet } from "react-router-dom";
import Navbar from "../../components/Admin/Navbar";
import { AdminUserContextProvider } from "../../context/AdminUserContext";

const AdminRoot = () => {
  return (
    <>
      <AdminUserContextProvider>
        <Navbar />
        <Outlet />
      </AdminUserContextProvider>
    </>
  );
};

export default AdminRoot;
