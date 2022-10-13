import React from 'react'
import Button from './Button'

export default function Navbar() {
  return (
    <div className="navbar">
  <div className="logo">EMS</div>
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
