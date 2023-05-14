import React from 'react'
import { useState,useEffect } from 'react'
import "./App.css"
import { useNavigate ,Redirect} from 'react-router-dom'
import axios from 'axios'

function Login() {
    const navigate = useNavigate()
    const [data,setData] = useState({
        email:"",
        password:""
    })
  
    
    
    function chandler(e){
        setData({...data,[e.target.name]:e.target.value})
    }
    const clickhandler=async()=>{
      if(data.email === '' || data.password === ""){
        return alert("please enter fields")
       }
   await  axios.post("http://localhost:4040/login",data).then(res=>localStorage.setItem("token",res.data.token))
     if(localStorage.getItem("token",true)) {
        return navigate("/dashboard")
       }
      
    }
  
    
  return (
    <div className='App mt-5'> 
      <input type="email" name="email" placeholder='email....'onChange={chandler}/><br /><br />
      <input type="password" name="password" placeholder='password....' onChange={chandler}/><br /><br />
      <button onClick={clickhandler} className="bg-primary border-0">Login</button>
    </div>
  )
}

export default Login
