import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { hostName } from '../App';
import { Store } from '../Context/StateStore';
const Login = () => {

    let {setUser,set}=useContext(Store)
  // State variables to store form data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', username);
    formData.append('password', password);

    axios.post(`${hostName}/api/EmployeeLogin/`,formData)
    .then((r)=>{     
        console.log("data sent succssfully");
        setUser(r.data)
        console.log(r.data) 
        navigate('/Dashboard');
    })
    .catch((e)=>{
        console.log("error",e);
    })
  };

  return (
    <div className='min-h-[100vh] poppins flex '>
        <div style={{backgroundColor:"#4c3575"}} 
        className='m-auto border-1 shadow-lg p-3 rounded-xl col-xl-4'>
            <img src={require('../Assests/meridawebsitelogowhite.png')} className=' mx-auto my-3' width={160} alt="Company image" />
      <h2 className='text-center text-slate-100'>Sign In</h2>
      <form className='flex w-5/6 mx-auto text-white flex-col my-3 items-center' onSubmit={handleSubmit}>
        <div className='w-full'>
          <label htmlFor="username">Username:</label>
          <input placeholder='Enter the Email'
          className='border-bottom w-full  rounded-lg text-slate-500 p-3 my-3 block border-2  outline-none border-none border-slate-700'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='w-full'>
          <label htmlFor="password">Password:</label>
          <input placeholder='Enter the password'
          className='border-bottom w-full rounded-lg text-slate-500 p-3 my-3 block border-2  outline-none border-none border-slate-700'
          type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}       />

        </div>
        <div className='flex w-full justify-between'>
            <p className='text-pink-500 cursor-pointer text-decoration-underline underline-offset-2 text-start w-fit'>Forgor password?</p>
        
            <p className='text-pink-500 cursor-pointer text-decoration-underline underline-offset-2 text-start w-fit'>For registeration</p>
        </div>
        <p className='h-[30px]' id="errorMessage"></p>
        <button className='bg-green-600 rounded p-2 px-4 hoverup text-white' type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};


export default Login;