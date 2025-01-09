import React from 'react'

const RidePopup = (props) => {
  return (
    <div>
          <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={()=>{
         props.setridepopuppanel(false)
      }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
      
              <h3 className='text-2xl font-semibold mb-5'>New Ride Available</h3>

              <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
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
          <div className='flex w-full  mt-5 items-center justify-between'>

          <button onClick={()=>{
             props.setridepopuppanel (false)
             }} className=' mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg'>Ignore</button>

          <button onClick={()=>{
             props.setConfirmridepopuppanel(true)
             }} className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Accept</button>


          </div>

             
             </div>
    </div>
  )
}

export default RidePopup