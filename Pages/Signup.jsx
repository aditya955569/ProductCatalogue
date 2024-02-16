import React, { useState } from 'react'
import axios from 'axios'
function Signup() {
  const [Username,setUsername]=useState(""); 
  const [Password,setPassword]=useState("");
  const handleRegister =  async() => {
      const response = await axios.post('http://localhost:3000/register', { Username, Password });
      console.log(response);
      if(response.data=="True"){
        alert("User created succesfully now you can Login");
      }
      else{
        alert("This username already exist");
      }
      window.location.reload();
  };  
  return (
    <div>
        <div className='flex flex-col text-center bg-blue-400 justify-center'>
            Username- <input className='ml-10 mr-10  bg-slate-400 text-white' onChange={(e)=>{
            setUsername(e.target.value)}}></input>
            Password- <input className='ml-10  mr-10  bg-slate-400 text-white' type='password' onChange={(e)=>{
            setPassword(e.target.value)}}></input>
            <button className='bg-orange-400 mt-10 mr-10 ml-10' onClick={handleRegister}>Submit</button>
        </div>
    </div>
  )
}

export default Signup