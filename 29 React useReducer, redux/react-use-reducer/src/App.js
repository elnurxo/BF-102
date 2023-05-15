import Counter from "./components/Counter";
import ToDos from "./components/ToDos";

function App() {
  return (
   <>
    <hr/>
    <h2 style={{textAlign:'center'}}>Counter with useReducer</h2>
    <Counter/>
    <hr/>
    <h2 style={{textAlign:'center'}}>To Do App with useReducer</h2>
    <ToDos/>
  </>
  );
}

export default App;
