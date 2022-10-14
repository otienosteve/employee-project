import React from 'react'
import { useNavigate } from 'react-router-dom';

function Button({text}) {
  const navigate = useNavigate();
    function handleNav(){
    navigate('/'+text);
  }
  return (<li onClick={handleNav}>
    {text}
  </li>
  )
}

export default Button