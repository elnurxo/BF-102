import React from 'react';
import "./index.css";
import { useModeContext } from "./context/ModeContext";
import { useUserContext } from "./context/UserContext";

const Button = () => {
  //get global state - useContext
  const{mode,setMode} = useModeContext();
  const{user,setUser} = useUserContext();
  function handleClick(){
    if (mode==='light') {
        setMode('dark');
        document.body.classList = 'dark';
    }
    else{
        setMode('light');
        document.body.classList = 'light';
    }
  }
  function handleAuth(){
    if (user) {
      //logout
      setUser(null);
    }
    else{
      setUser({id:1,username:"elnur"})
    }
  }
  return (
    <>
    <h1>Mode Switch</h1>
    <button onClick={handleClick}>current mode: {mode}</button>
    <h1>Login/Logout</h1>
    <button onClick={handleAuth}>{user ? "Logout" : "Login"}</button>
    {user && <h3>Current User: {user.username}</h3>}
    </>
  )
}

export default Button