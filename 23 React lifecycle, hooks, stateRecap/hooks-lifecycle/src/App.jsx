import { useEffect, useState } from "react";
import axios from "axios";
import Text from "./Text";

function App() {
  let [dataState, setDataState] = useState({});
  let [user, setUser] = useState(1);
  let[newUser,setNewUser] = useState({name:'',username:''});

  function handleIncrease() {
    setUser(++user);
  }
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${user}`)
    .then(resp => {
      setDataState(resp.data)
    })
  }, [user]);
  function handlePost(e) {
    e.preventDefault();
    console.log(newUser);
    axios.post("https://jsonplaceholder.typicode.com/users",newUser)
    .then((res)=>console.log(res.data));

    setNewUser({name:'',username:''})
     
  }
  function handleChange(e) {
    setNewUser({...newUser,[e.target.name]:e.target.value})
  }
  return (
    <>
      <ul>
        <li>ID:  {dataState.id}</li>
        <li>NAME:  {dataState.name}</li>
        <li>EMAIL:  {dataState.email}</li>
        <li>WEBSITE:  <a href={dataState.website}>{dataState.website}</a></li>
      </ul>
      <button onClick={handleIncrease}>Get Next User</button>
      <p>{user}</p>
      <h1>Add New User</h1>
      <form onSubmit={(e)=>handlePost(e)}>
        <input value={newUser.name} onChange={(e)=>handleChange(e)}  name="name" placeholder="name"/>
        <input value={newUser.username} onChange={(e)=>handleChange(e)}  name="username" placeholder="username"/>
        <button type="submit">ADD</button>
      </form>
    </>
  );
}

export default App;
