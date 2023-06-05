import { useEffect, useState } from "react"
import { getUsers } from "../api/requests"
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const[users,setUsers] = useState([]);
  useEffect(()=>{
    if (!localStorage.getItem('user')) {
      navigate('/login');
    }
  },[])
  useEffect(()=>{
    if(localStorage.getItem('token')){
      getUsers(localStorage.getItem('token')).then((res)=>{
        setUsers(res.users);
      });
    }
  },[])
  return (
    <ul>
      {users && users.map((user)=>{
        return <li key={user._id}>{user.username}</li>
      })}
    </ul>
  )
}

export default Users