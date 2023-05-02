import React from 'react'
const Students = ({students}) => {
  return (
   <>
    <h1>Students</h1>
   <ul>
        {students.map((student,idx)=>{
            return <li key={idx}>{student.name}, {student.age}</li>
        })}
   </ul>
   </>
  )
}

export default Students