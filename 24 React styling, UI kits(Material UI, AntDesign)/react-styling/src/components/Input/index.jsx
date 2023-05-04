import { useState } from "react"
import style from "./index.module.css"

const Input = () => {
  let[counter,setCounter] = useState(0);
  return (
    // eslint-disable-next-line react/no-unknown-property
    <input setCounter={setCounter} counter={counter} style={{fontSize:'30px'}} className={style.input} placeholder="search product"/>
  )
}

export default Input