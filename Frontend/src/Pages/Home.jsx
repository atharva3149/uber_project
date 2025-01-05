import React, { useRef, useState } from 'react'
import  { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'

const Home = () => {
  const [pickup, setpickup] = useState('')
  const [destination, setdestination] = useState('')
  const [panelopen, setpanelopen] = useState(false)
  const vehiclePanelref = useRef(null)
  const ConfirmRidePanelref = useRef(null)
  const panelRef = useRef(null)
  const panelcloseref = useRef(null)
  const [vehiclePanel, setvehiclePanel] = useState(false)
  const [confirmridepanel, setconfirmridepanel] = useState(false)

const submitHandler = (e) =>{
e.preventDefault()
}

useGSAP(function(){
   if(panelopen){
    gsap.to(panelRef.current,{
      height:'70%',
      padding:24
    
    })
    gsap.to(panelcloseref.current,{
      opacity:1
    })
   }
   else{
    gsap.to(panelRef.current,{
      height:'0%',
      padding:0

     
    })
    gsap.to(panelcloseref.current,{
      opacity:0
    })
   }
},[panelopen])

useGSAP(function(){
  if(vehiclePanel){
    gsap.to(vehiclePanelref.current,{
      transform:'translateY(0)'
    })
  }
  else{
    gsap.to(vehiclePanelref.current,{
      transform:'translateY(100%)'
    })
  
  }
},[vehiclePanel])


useGSAP(function(){
  if(confirmridepanel){
    gsap.to(ConfirmRidePanelref.current,{
      transform:'translateY(0)'
    })
  }
  else{
    gsap.to(ConfirmRidePanelref.current,{
      transform:'translateY(100%)'
    })
  
  }
},[confirmridepanel])





  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div  className='h-screen w-screen'>
        {/* img for temp use */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full '>
        <div className='h-[30%] p-6 bg-white relative '>
        <h5 ref={panelcloseref}
        onClick={()=>{
          setpanelopen(false)
        }}
        className='absolute opacity-0 top-6 right-6 text-2xl'>
        <i className="ri-arrow-down-wide-line"></i>
        </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div className="line absolute h-16 w-1 left-10 top-[45%] bg-gray-900 rounded-full"></div>
          <input 
          onClick={()=>{setpanelopen(true)}}
          value={pickup}
          onChange={(e)=>{  
            setpickup(e.target.value)
          }}
          className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
          type="text" placeholder='Add a pick up location' />

          <input 
           onClick={()=>{setpanelopen(true)}}
          value={destination}
          onChange={(e)=>{  
            setdestination(e.target.value)
          }}
          className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
           type="text" placeholder='Enter your destination' />
        </form>
        </div>

        <div ref={panelRef} className='  bg-white  h-0'>
            <LocationSearchPanel setpanelopen={setpanelopen} setvehiclePanel={setvehiclePanel} />
        </div>

      </div>

      <div ref={vehiclePanelref} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
        <VehiclePanel setconfirmridepanel={setconfirmridepanel} setvehiclePanel={setvehiclePanel}/>
      </div>

      <div ref={ConfirmRidePanelref} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
        <ConfirmRide/>
       </div>
      
    </div>
  )
}

export default Home