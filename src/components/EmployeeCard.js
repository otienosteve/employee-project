import React from 'react'

function EmployeeCard({name, age}) {
  return (
    <div className='card'>
<p>{name}</p>
<p>{age}</p>
    </div>
  )
}

export default EmployeeCard 