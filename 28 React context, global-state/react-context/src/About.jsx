import { useModeContext } from "./context/ModeContext";
import { useUserContext } from "./context/UserContext";
const About = () => {
  const modeContext = useModeContext();
  const{user} = useUserContext();

  console.log('from about page: ',user);
  return (
    <h1>{user ? `${user.username}, ${user.id}` : "no one in!"}</h1>
  )
}

export default About