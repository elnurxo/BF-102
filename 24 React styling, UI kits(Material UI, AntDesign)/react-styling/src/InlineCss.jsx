import { headingStyle } from "./headingstyle.js";
  let btnStyle ={
    color:'blue',
    background:'green'
  };
const InlineCss = () => {
  let count = 10;
  return (
    <>
      <h1 style={{...headingStyle,btnStyle}}>{count}</h1>
      <button style={btnStyle}>Primary</button>
      <button style={btnStyle}>Secondary</button>
    </>
  )
}

export default InlineCss