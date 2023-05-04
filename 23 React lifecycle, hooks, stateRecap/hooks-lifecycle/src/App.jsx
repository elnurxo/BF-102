import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Text from "./Text";
import Input from "./Input";

function App() {
  let inputRef = useRef();
  function handleFocus() {
    inputRef.current.focus();
  }
  return (
    <>
      <Input ref={inputRef}/>
      <button onClick={handleFocus}>focus input</button>
    </>
  );
}

export default App;
