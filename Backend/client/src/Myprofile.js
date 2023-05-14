import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Myprofile() {
    const [data,setData] = useState('')
    const [review,setReview] = useState([])
    
   
    useEffect(()=>{
        axios.get("http://localhost:4040/myprofile",{
            headers:{
                "x-token":localStorage.getItem("token")
            }
        }).then(res=>setData(res.data))
      
 
       })

       useEffect(()=>{
        axios.get("http://localhost:4040/myreview",{
            headers:{
                "x-token":localStorage.getItem("token")
            }
        }).then(res=>setReview(res.data))
      
      
       },[])
  return (
    <div>
       <Link to="/dashboard">
        <button className="mt-2 border-0 p-1 text-primary">Back to dashboard</button></Link>
      <h1 className='App'>MY PROFILE</h1><br />
      <div className="profile-card mt-5">
  <img src="https://imgs.search.brave.com/MTM9456RIJMgpiy5wbOeafOhi2e3jFZoCLL9ieLqfew/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9wYXJh/ZGlzZXZhbGxleWNo/cmlzdGlhbi5vcmcv/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDEvQmxhbmstUHJv/ZmlsZS5wbmc" alt="Profile Picture" className="profile-cardimg"/>
  <h3>{data.fullname}</h3>
  <p>Email:{data.email}</p>
  <p>Contact Information:{data.phonenumber}</p>
  <p>skills:</p>
  <h6>{data.skills}</h6>
 
  {review && review.map(item=>
     (<><p>Rating given by:   {item.taskprovider}</p><p>{item.rating}</p></>)
  )}
</div>
    </div>
  )
}

export default Myprofile
