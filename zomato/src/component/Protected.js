import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Protected = (props) => {

  const {Component}=props;

  console.log(Component,"component");

  console.log(Navigate);

  const navigate=useNavigate();
  
  useEffect(()=>{

    let login=localStorage.getItem('login');

    if(!login){
      navigate('login')
    }

  },[])



  return(
    <>

       <Component/>
    </>
  )
   
};
export default Protected;