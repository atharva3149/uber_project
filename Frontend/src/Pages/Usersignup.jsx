import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios'
import {UserDataContext} from '../context/userContext';

const Usersignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastname, setLastname] = useState('')
  const [UserData, setUserData] = useState('')


const navigate = useNavigate()

const  { user , setuser } = React.useContext(UserDataContext)


  const submitHandler= async (e) =>{
e.preventDefault()
const newUser= {
  
    fullname:{
      firstname:firstName,
    lastname: lastname ,
  },
  password:password,
  email:email
  
}

const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

if(response.status ===201){
   const data = response.data 

   setuser(data.user)
   localStorage.setItem('token', data.token) 

   navigate('/home')
}
 
setEmail('')
setfirstName('')
setLastname('')
setPassword('')
  }


  return (
    <div>
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
       <form onSubmit={(e)=>{
         submitHandler(e)
       }}>
       <h3 className='text-lg font-medium mb-2'>What's Your Name</h3>
       <div className='flex gap-4 mb-5'>
       <input 
       required 
       
       className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base'
       type="text" 
       placeholder='First Name' 
       value={firstName}
       onChange={(e)=>{
       setfirstName (e.target.value)
       }}
       />
        <input 
       required 
       className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base'
       type="text" 
       placeholder='Last Name' 
       value={lastname}
       onChange={(e)=>{
        setLastname (e.target.value) 
       }}
       />
       </div>

       <h3 className='text-lg font-medium mb-2'>What's Your Email</h3>
       <input 
       required 
       value={email}
       onChange={(e)=>{
        setEmail (e.target.value) 
       }}
       className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
       type="email" 
       placeholder='email@example.com' 
       />

       <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

       <input 
       required  
       value={password}
       onChange={(e)=>{
        setPassword (e.target.value) 
       }}
       className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
       type="password" 
       placeholder='password' 
       />
       <button
       className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>
           Create Account</button>

         

       </form>
       <p className='text-center'>Already Have A Account? <Link to={'/login'} className='text-blue-600' >Login Here</Link></p> 
    </div>
    <div>
      <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy  </span> and <span className='underline'>Terms of Service apply.</span></p>
    </div>
   </div>
   </div>
  )
}

export default Usersignup