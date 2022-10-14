import React,{useState} from 'react'

import {useParams} from 'react-router-dom'

function Single({employees}) {
    const { id } = useParams();
    
const emp=employees.filter(emp=>emp.id===parseInt(id))

// console.log(emp)
const{name, title,age,salary, image}=emp[0]
   
  return (
    <div className="row">

          <div className='card col-md-2' >
      <img src={image} alt="my img"  />
    <p className='card-title text-center'>{title}</p>
<p className='text-center'>{name}</p>
<p className='text-center'>{age}</p>
<p className='text-center'>{salary}</p>
</div>
    </div>
    
  )
}

export default Single