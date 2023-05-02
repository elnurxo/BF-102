import "./App.css";
import { useState } from "react"; //hook
import { students } from "./data";
import { v4 as uuidv4 } from 'uuid';

function App() {
  // let [counter,setCounter] = useState(0);
  // function handleDecrease() {
  //   if (counter>1) {
  //     setCounter(--counter);
  //   }
  // }
  // const handleIncrease = ()=>{
  //   setCounter(++counter);
  // }
  // const handleReset = ()=>{
  //   setCounter(0);
  // }
  const [studentsState, setStudentsState] = useState(students);
  const [student,setStudent] = useState({name:'',age:0});

  function handleAddStudent() {
      console.log(student);
      setStudentsState([...studentsState,student]);
      setStudent({name:'',age:0})
  }
  function handleChange(e) {
      setStudent({...student,[e.target.name]:e.target.value});
      student.id = uuidv4();
  }
  function handleSort() {
    let sortedStudents = [...studentsState.sort((x,y)=>x.age-y.age)];
    setStudentsState(sortedStudents);
    console.log(studentsState);
  }
  function handleSearch(e) {
     if (e.target.value.trim()==="") {
        setStudentsState(students);
     }
     else{
      let filteredStudents = studentsState.filter((student,idx)=>student.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()));
      setStudentsState(filteredStudents);
     }
  }

  function handleDelete(id) {
    setStudentsState(studentsState.filter((stu)=>stu.id!==id));    
  }
  return (
    <>
      {/* <button onClick={handleDecrease}>Decrease</button>
      <span>{counter}</span>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button> */}
      <h1>Students</h1>
      <input onChange={(e)=>handleSearch(e)} placeholder="search student"/>
      <button onClick={handleSort}>sort by age</button>
      <ul>
        {studentsState.map((student, idx) => {
          return (
            <li key={idx}>
              {student.name}, {student.age}{" "}
              <button onClick={()=>handleDelete(student.id)}>delete</button>
            </li>
          );
        })}
      </ul>
      <h4>Add new Student</h4>
      <input name="name" value={student.name} onChange={(e)=>handleChange(e)} placeholder="name" type="text"/>
      <input name="age" value={student.age} onChange={(e)=>handleChange(e)} placeholder="age" type="number" min="0" max="100"/>
      <button onClick={handleAddStudent}>Add Student</button>
    </>
  );
}

export default App;
