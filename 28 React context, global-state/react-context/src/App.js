import Home from "./Home";
import { UserContextProvider } from "./context/UserContext";
import { ModeContextProvider } from "./context/ModeContext";
import About from "./About";

function App() {
  return (
    <ModeContextProvider>
      <UserContextProvider>
        <Home />
        <About />
      </UserContextProvider>
    </ModeContextProvider>
  );
}

export default App;
