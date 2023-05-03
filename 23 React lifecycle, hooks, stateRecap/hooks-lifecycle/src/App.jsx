import { useState } from "react"
import Welcome from "./Welcome";
import Login from "./Login";
import { users } from "./users.js";

function App() {
  let[isLoggodIn,setIsLoggedIn] = useState(false);
  let[user,setUser] = useState({});

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
          {isLoggodIn ? <Welcome fullname={user.fullName}/> : <Login user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} users={users}/>}
    </div>
  )
}

export default App
