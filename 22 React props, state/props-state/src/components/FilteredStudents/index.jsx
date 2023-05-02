import React from 'react'

const FilteredStudents = ({students}) => {
  const filteredStudents = students.filter((student)=>student.age>21);  
  
  return (
    <ul>
        {filteredStudents.map(({name,age},idx)=>{
            return <li key={idx}>{name}, {age}</li>
        })}
    </ul>
  )
}

export default FilteredStudents