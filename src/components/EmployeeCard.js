import React from 'react'
import { useNavigate } from "react-router-dom";
function EmployeeCard({id,image,name, age, salary, title}) {
  const history=useNavigate()

const showCard=(id)=>{
  history("/single/"+id, { replace: true });
}
  return (
    <div className='card col-md-2' onClick={()=>showCard(id)}>
      <img src={image} alt="my img" srcset="" />
<p className='card-title text-center'>{name}</p>
<p className='text-center'>{title}</p>
<p className='text-center'>{age}</p>
<p className='text-center'>{salary}</p>

    </div>
  )
}

export default EmployeeCard 