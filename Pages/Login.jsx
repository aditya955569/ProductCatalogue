import React, { useState } from 'react'
import axios from 'axios'
function Login() {
  const [Username,setUsername]=useState(""); 
  const [Password,setPassword]=useState(""); 
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleLogin = async() => {
    const response = await axios.post('http://localhost:3000/login', { Username, Password });
    console.log(response);
    if(response.data=="User not found"){
      console.log("User not found");
    }
    else if(response.data=="Invalid password"){
      console.log("Invalid Password");
    }
    else{
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
    }
    window.location.reload();
};  
  return (
    <div>
      <div className='flex flex-col text-center bg-blue-400 justify-center'>
        Username- <input className='ml-10 mr-10  bg-slate-400 text-white' onChange={(e) => {
          setUsername(e.target.value)
        }}></input>
        Password- <input className='ml-10  mr-10  bg-slate-400 text-white' onChange={(e) => {
          setPassword(e.target.value)
        }}></input>
        <button className='bg-orange-400 mt-10 mr-10 ml-10' onClick={handleLogin}>Submit</button>
      </div>
    </div>
  )
}

export default Login