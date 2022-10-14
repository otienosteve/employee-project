import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate=useNavigate()
  const goHome=()=>{

navigate('/')
  }
  return (
    <div className="navbar">
  <div className="logo" onClick={goHome}>EMS</div>
  <div className="links">
    <ul>
<Button text="Home"/> 
<Button text="Profile"/>
<Button text="List"/>
<Button text="Roles"/>
    </ul>
  </div>
 </div>
  )
}
