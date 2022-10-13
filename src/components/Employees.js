import React from 'react'
import EmployeeCard from './EmployeeCard'


function Employees({employees}) {
  return (
   <div>
{employees.map(employee=><EmployeeCard key={employee.id} {...employee}/>)}
   </div>


  )
}

export default Employees