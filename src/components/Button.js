import React from 'react'
import { useNavigate } from 'react-router-dom';

function Button({text}) {
  const history=useNavigate()
    function handleNav(){
      if(text==='Home'){
        console.log('home')
        history('/')
      }else{
        history('/'+text);
      }
  }
  return (<li onClick={handleNav}>
    {text}
  </li>
  )
}

export default Button