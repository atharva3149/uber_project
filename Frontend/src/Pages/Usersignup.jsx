import React from 'react'
import { Link } from 'react-router-dom';

const Usersignup = () => {
  return (
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
       />
        <input 
       required 
       className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base'
       type="text" 
       placeholder='Last Name' 
       />
       </div>

       <h3 className='text-lg font-medium mb-2'>What's Your Email</h3>
       <input 
       required 
       
       className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
       type="email" 
       placeholder='email@example.com' 
       />

       <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

       <input 
       required  
       
       className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
       type="password" 
       placeholder='password' 
       />
       <button
       className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>
           Login</button>

         

       </form>
       <p className='text-center'>Already Have A Account? <Link to={'/login'} className='text-blue-600' >Login Here</Link></p> 
    </div>
    <div>
      <p className='text-[10px] leading-tight'>By proceeding , you consent to get calls , WhatsApp or SMS messages, including by automated means , from Uber and its affiliates to the number provided.</p>
    </div>
   </div>
  )
}

export default Usersignup