import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Captainsignup = () => {

  const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastname, setLastname] = useState('')
  
    const [vehicleColor, setVehicleColor] = useState('')
    const [vehicleplate, setVehicleplate] = useState('')
    const [vehiclecapacity, setVehiclecapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    const   {captain , setCaptain} = React.useContext(CaptainDataContext)
  
  
  
    const submitHandler= async (e) =>{
  e.preventDefault()
  const captainData = {
    fullname:{
      firstname:firstName,
    lastname: lastname ,
  },
  password:password,
  email:email,
  vehicle:{
    vehicleType:vehicleType,
    color:vehicleColor,
    plate:vehicleplate,
    capacity:vehiclecapacity
  }
  }
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)  

  if(response.status ===201){
    const data = response.data
    setCaptain(data.captain)
    localStorage.setItem('token', data.token)
    navigate('/captain-home')
  }

  setEmail('')
  setfirstName('')
  setLastname('')
  setPassword('')
  setVehicleColor('')
  setVehicleplate('')
  setVehiclecapacity('')
  setVehicleType('')
    }
  
  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
       <form onSubmit={(e)=>{
         submitHandler(e)
       }}>
       <h3 className='text-lg w-full font-medium mb-2'>What's Our Captain's Name</h3>
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

       <h3 className='text-lg font-medium mb-2'>What's Our Captain's Email</h3>
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

      <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
      <div className='flex gap-4 mb-7'>
      <select 
        required
        value={vehicleType}
        onChange={(e) => setVehicleType(e.target.value)}
        className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
      >
        <option value="">Select Vehicle Type</option>
        <option value="car">Car</option>
        <option value="auto">Auto</option>
        <option value="motorcycle">MotorCycle</option>
      </select>

     
      <input 
        required
        value={vehicleColor}
        onChange={(e) => setVehicleColor(e.target.value)}
        className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
        type="text"
        placeholder='Vehicle Color'
      />
      </div>

      <div className='flex gap-4 mb-7'>
      <input 
        required
        value={vehicleplate}
        onChange={(e) => setVehicleplate(e.target.value)}
        className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
        type="text"
        placeholder='Vehicle Plate Number'
      />

      <input 
        required
        value={vehiclecapacity}
        onChange={(e) => setVehiclecapacity(e.target.value)}
        className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
        type="number"
        placeholder='Vehicle Capacity'
        min="1"
      />
</div>

       <button
       className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>
           Create Captain Account</button>

         

       </form>
       <p className='text-center'>Already Have A Account? <Link to={'/captain-login'} className='text-blue-600' >Login Here</Link></p> 
    </div>
    <div>
      <p className='text-[10px] mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy  </span> and <span className='underline'>Terms of Service apply.</span></p>
    </div>
   </div>
  )
}

export default Captainsignup