import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import "./App.css"

function Home() {

  return (
    <div className='bg-dark'>
     
      <nav className='bg-dark text-primary d-flex justify-content-between '>
    <h1>DEVELOPERS HUB</h1>
    <div>
    <Link to="/login">
  
    <button className='p-2  border-0 mr-4'>Sign in</button></Link>&nbsp;&nbsp;
    <Link to="/register">
    <button  className='p-2 border-0'>Sign up</button></Link>
    </div>
   </nav>

    <div className="homecontent">
   
    <h1 >Developers hub</h1>
 <p>create a portfolio get freelancing works</p>
    <Link to="/login">
    <button className='p-2 bg-primary border-0'>log in</button></Link>&nbsp;
    <Link to="/register">
    <button  className='p-2 border-0'>Register</button></Link>
    </div>
  
    </div>
   
  )
}

export default Home
