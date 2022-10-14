import React from 'react'

function EmployeeCard({image,name, age, salary, title}) {
  return (
    <div className='card col-md-2'>
      <img src={image} alt="my img" srcset="" />
<p className='card-title'>{name}</p>
<p>{title}</p>
<p>{age}</p>
<p>{salary}</p>

    </div>
  )
}

export default EmployeeCard 