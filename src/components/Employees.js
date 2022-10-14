import React from 'react'
import EmployeeCard from './EmployeeCard'


function Employees({employees, showCard}) {
  return (
   <div class="row">
{employees.map(employee=><EmployeeCard key={employee.id} {...employee} showCard={showCard}/>)}
   </div>


  )
}

export default Employees