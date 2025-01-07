import React from 'react'
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div >
    <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={()=>{
   props.setfinishRidePanel(false)
}}><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Finish This Ride</h3>

        <div className='flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4'>
          <div className='flex items-center gap-3'>
              <img className='h-12 w-10 rounded-full object-cover' src="https://imgs.search.brave.com/LECHkVQX4vws8uAu9AGNvUW1NgNRs4sQBHQ-jzialmM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzc4LzA5Lzgy/LzM2MF9GXzY3ODA5/ODIxMV9SQnRqeTY4/bzRzTjBteUNXWTNP/ck05cmV2SjlKT3c0/MS5qcGc" alt="" />
              <h2 className='text-lg font-medium'>Emma Thomas</h2>
          </div>
          <h5 className='text-lg font-semibold'>2.2 KM</h5>
        </div>

       <div className='flex gap-2 justify-between flex-col items-center'>
      
       <div className='w-full mt-5'>
        <div className='flex items-center gap-5 p-3 border-b-2'>
        <i className="ri-map-pin-fill"></i>
        <div>
          <h3 className='text-lg font-medium'>562/11-A</h3>
          <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Mumbai</p>
        </div>
           </div>

        <div className='flex items-center gap-5 p-3 border-b-2'>
        <i className="text-lg ri-map-pin-2-fill"></i>
        <div>
          <h3 className='text-lg font-medium'>562/11-A</h3>
          <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Mumbai</p>
        </div>
        </div>

        <div className='flex items-center gap-5 p-3 '>
        <i className="ri-currency-line"></i>
        <div>
          <h3 className='text-lg font-medium'>₹193.20</h3>
          <p className='text-sm -mt-1 text-gray-600'>Cash, Cash </p>
        </div>  
        </div>
       </div>
      
      <div className='mt-10 w-full '>
    
    <Link to={'/captain-home'} className='w-full mt-5 flex text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride </Link>

 



      </div>

       
       </div>
</div>
  )
}

export default FinishRide