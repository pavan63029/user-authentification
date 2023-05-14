import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Register() {
  const navigate = useNavigate()
    const [data,setData] = useState({
        fullname:"",
        email:"",
        phonenumber:"",
       password:"",
        confirmpassword:""
    })
    function chandler(e){
        setData({...data,[e.target.name]:e.target.value})
    }
    function clickhandler(e){
        e.preventDefault()
        if(data.email !== "" && data.fullname !==""&& data.phonenumber !== ""  && data.password !== "" && data.confirmpassword !== ""){
        axios.post("http://localhost:4040/register",data).then(res=>console.log(res));
        alert("successfully register")
        navigate("/login")
        }
    }
  return (
    <div className='App'> 
    <input type="text"  placeholder="full name" name="fullname" onChange={chandler} /><br /><br />
    <input type="email" placeholder="email" name="email"   onChange={chandler}/><br /><br />
    <input type="text" placeholder="phonenumber" name="phonenumber" onChange={chandler}/><br /><br />

    <input type="password" placeholder="password" name="password" onChange={chandler}/><br /><br />
    <input type="password"  placeholder="confirmpassword" name="confirmpassword" onChange={chandler}/><br /><br />
    <button onClick={clickhandler} className="bg-primary border-0">Register</button>
  </div>
  )
}
export default Register;