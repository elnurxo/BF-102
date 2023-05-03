import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Login = ({users, setIsLoggedIn, user, setUser}) => {
   let[wrongUser,setWrongUser] =  useState(false);

  function handleChange(e) {
        setUser({...user,[e.target.name]:e.target.value});
  }
  function handleSubmit(e){
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    let userFound = users.find((item)=>item.username === user.username && item.password === user.password);
   
    if (userFound===undefined)
        userFound = false;
    else{
        user.fullName = userFound.fullName;
        userFound = true;
    }
    setIsLoggedIn(userFound);
    if (userFound) {
        setWrongUser(false);
    }
    else{
        setWrongUser(true);
    }
  }
  return (
    <>
    <h1>Login</h1>
    <form onSubmit={(e)=>handleSubmit(e)}>
        <input name="username" onChange={(e)=>handleChange(e)} type='text' placeholder='username'/>
        <input name="password" onChange={(e)=>handleChange(e)} type='password' placeholder='password'/>
       <button type='submit'>Login</button> 
    </form>
    <p style={{color:'red'}}>{wrongUser ? "wrong username or password" : ""}</p>
    </>
  )
}

export default Login