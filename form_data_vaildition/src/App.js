
import { useState } from 'react';
import './App.css';


function App() {

  const [formData,setDataForm]=useState([{email:'',password:'',userName:'',confirmPassword:''}]);
  const [errors,setErrors]=useState({
    erroremail:'',
    errorpassword:'',
    erroruserName:'',
    errorconfirmPassword:''
  })

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };


  const validatePassword=(password)=>{
    const re=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/;

    return re.test(password);
  }

  const validateUserName=(userName)=>{
    const re=/^[a-zA-Z\-]+$/;

    return re.test(userName);
  }


  const handleChange=(event)=>{

    const {name,value}=event.target;

    console.log(name,"name","value",value)


    setDataForm((prevData)=>{
      return{...prevData,[name]:value}
    })

    setErrors((prevErrors) => ({
      ...prevErrors,
      [`error${name}`]: !value ? `${name} is required` : '',
    }));

    if(name === 'email'){
      setErrors((prevData)=>{

        return{
          ...prevData,
          erroremail:!validateEmail(value) ?'Invaild email':''
        }
      })
    }
    else if(name === 'password'){

      setErrors((prevData)=>{

        return {
          ...prevData,
          errorpassword:!validatePassword(value) ?"Password must be at least 8 characters long":"",
          errorconfirmPassword: value !== formData.confirmPassword ?"password should be matched":''
        }
      })
    }
    else if(name === 'confirmPassword'){

      setErrors((prevData)=>{

        return {
          ...prevData,
          confirmPassword: value !== formData.password ? "password should be match":''
        }
      })
    }
    else if(name === 'userName'){

      setErrors((prevData)=>{

        return {
          ...prevData,
          erroruserName:!validateUserName(value) ?"username should have Aleast oneCapLetter and OneSmall Letter":""
        }
      })
    }



  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    const { email, password,userName,confirmPassword } =formData;


    // const newObj=[...formData,{email:'',password:'',userName:'',confirmPassword:''}]
    // console.log(newObj,"newobj")
    

    if (validateEmail(email) && validatePassword(password) && validateUserName(userName)) {
    
      setDataForm((prevData)=>{
        return([...prevData])
      })

    } else {
      console.log('Form contains errors');

      setDataForm((prevData)=>{
        return({email:'',password:'',userName:'',confirmPassword:''})
      })
    }
    
  }


  return (
    <div className="App">
      <form  onSubmit={handleSubmit}>
      
      <input type='email' name='email' placeholder='email'  value={formData.email}   onChange={handleChange}/>
      {errors.erroremail && <span>{errors.erroremail}</span>}
      <input type='password' name='password' placeholder='password' value={formData.password}  onChange={handleChange}/>
      {errors.errorpassword && <span>{errors.errorpassword}</span>}
      <input type='password' name='confirmPassword' placeholder='confirmPasword' value={formData.confirmPassword} onChange={handleChange}/>
      {errors.errorconfirmPassword && <span>{errors.errorconfirmPassword}</span>}
      <input type='text' name='userName' placeholder='username'  value={formData.userName} onChange={handleChange}/>
      {errors.erroruserName && <span>{errors.erroruserName}</span>}
      <button type='submit'>Submit</button>
      </form>

    </div>
  );
}

export default App;
