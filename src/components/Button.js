import React from 'react'
import { useNavigate } from 'react-router-dom';

function Button({text}) {
  const history=useNavigate()
    function handleNav(){
    history('/'+text);
  }
  return (<li>
    {text}
  </li>
  )
}

export default Button