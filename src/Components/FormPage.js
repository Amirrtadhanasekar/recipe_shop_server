import React, { useState } from 'react';
import "./css/FormPage.css"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const FormPage=()=>{
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const navigate=useNavigate()

    function handlePost(){
        axios.post("http://localhost:5000/fullstack/signup",{name,email,password})
        .then(()=>{
            alert("data has been posted")
            setEmail('')
            setName('')
            setPassword('')
            navigate('/Login')
           
        })
        .catch((err)=>{
            console.error(err);
        })
    }
    return(
<div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Sign Up</h2>
        <form className="form-fields">
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email " />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
        </form>
          <button  onClick={handlePost} className="submit-button">Submit</button>
      </div>
    </div>
    );
}
export default FormPage
    
  