import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./App.css"
import { useEffect,useState } from 'react'
import axios from 'axios'
function Dashboard() {
    const [data,setData] = useState([])
    const navigate = useNavigate()
    const Clickhandler=async ()=>{
       await localStorage.removeItem("token")
       navigate("/")
    
    }
    useEffect(()=>{
        axios.get("http://localhost:4040/allprofiles",{
            headers:{
                "x-token":localStorage.getItem("token")
            }
        }).then(res=>setData(res.data))
       })
  return (
    <div >
      <nav >
        <div className='bg-dark text-primary d-flex justify-content-between'>
    <h1>DEVELOPERS DASHBOARD</h1>
    <div>
   <Link to="/myprofile">
    <button className='bg-primary mt-2 border-0'>My profile</button></Link> &nbsp;
    <button onClick={Clickhandler} className='mt-2 border-0'>Logout</button>
    </div>
    </div>
    </nav >
        <div className='App'>
    <h1 className='App'>DEVELOPERS</h1>
  
    {data.map((data)=>(
          <>
    <div className="profile-card mt-5">
  <img src="https://imgs.search.brave.com/MTM9456RIJMgpiy5wbOeafOhi2e3jFZoCLL9ieLqfew/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9wYXJh/ZGlzZXZhbGxleWNo/cmlzdGlhbi5vcmcv/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDEvQmxhbmstUHJv/ZmlsZS5wbmc" alt="Profile Picture" className="profile-cardimg"/>
  <h3>{data.fullname}</h3>
  <p>Email:{data.email}</p>
  <p>Contact Information:{data.phonenumber}</p>

</div></>
    ))}
    </div>
    </div>
  )
}

export default Dashboard
