import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const login=()=>{
    localStorage.setItem('login',true)
  }

  const navigate=useNavigate();

  useEffect(()=>{
    let login=localStorage.getItem('login')

    if(login){
      navigate('/')
    }
  })

  return (
    
    <div>
      <input  type='text'/><br/>
      <input type='text'/><br/>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login