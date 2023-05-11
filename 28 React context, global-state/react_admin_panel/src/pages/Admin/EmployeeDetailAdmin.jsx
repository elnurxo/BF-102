import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../../context/AdminUserContext";
import { useEffect } from "react";

const EmployeeDetail = () => {
  const{adminLocal} = useAdminContext();
  const navigate = useNavigate();
  useEffect(()=>{
    if (adminLocal===null) {
      navigate('/admin/login');
    }
   },[adminLocal,navigate]);
  return (
    <div>EmployeeDetail</div>
  )
}

export default EmployeeDetail