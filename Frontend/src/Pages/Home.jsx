import React, { useRef, useState } from 'react'
import axios from 'axios'
import  { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom';

import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'

const Home = () => {
  const [pickup, setpickup] = useState('')
  const [destination, setdestination] = useState('')
  const [panelopen, setpanelopen] = useState(false)
  const vehiclePanelref = useRef(null)
  const ConfirmRidePanelref = useRef(null)
  const vehicleFoundref = useRef(null)
  const waitingForDriverRef = useRef(null)

  const panelRef = useRef(null)
  const panelcloseref = useRef(null)
  const [vehiclePanel, setvehiclePanel] = useState(false)
  const [confirmridepanel, setconfirmridepanel] = useState(false)
  const [VehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setwaitingForDriver] = useState(false)
  const [ pickupSuggestions, setPickupSuggestions ] = useState([])
  const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
  const [ activeField, setActiveField ] = useState(null)
  const [fare, setfare] = useState({})

  const navigate = useNavigate()

  const handlePickupChange = async (e) => {
    setpickup(e.target.value)
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }

        })
        setPickupSuggestions(response.data)
    } catch {
        // handle error
    }
}

const handleDestinationChange = async (e) => {
    setdestination(e.target.value)
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setDestinationSuggestions(response.data)
    } catch {
        // handle error
    }
}


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

useGSAP(function(){
  if(VehicleFound){
    gsap.to(vehicleFoundref.current,{
      transform:'translateY(0)'
    })
  }
  else{
    gsap.to(vehicleFoundref.current,{
      transform:'translateY(100%)'
    })
  
  }
},[VehicleFound])

useGSAP(function(){
  if(waitingForDriver){
    gsap.to(waitingForDriverRef.current,{
      transform:'translateY(0)'
    })
  }
  else{
    gsap.to(waitingForDriverRef.current,{
      transform:'translateY(100%)'
    })
  
  }
},[waitingForDriver])

async function findTrip() {
  setvehiclePanel(true)
  setpanelopen(false)

  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
      params: { pickup, destination },
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })


  console.log(response.data)


}

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
          <form className='relative py-3' onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
                        <input
                            onClick={() => {
                                setpanelopen(true)
                                setActiveField('pickup')
                            }}
                            value={pickup}
                            onChange={handlePickupChange}
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
                            type="text"
                            placeholder='Add a pick-up location'
                        />
                        <input
                            onClick={() => {
                                setpanelopen(true)
                                setActiveField('destination')
                            }}
                            value={destination}
                            onChange={handleDestinationChange}
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3'
                            type="text"
                            placeholder='Enter your destination' />
                    </form>
                    <button 
                    onClick={findTrip}
                    className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
                      Find Trip
                    </button>
        </div>

        <div ref={panelRef} className='  bg-white  h-0'>
        <LocationSearchPanel
                        suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                        setpanelopen={setpanelopen}
                        setvehiclePanel={setvehiclePanel}
                        setpickup={setpickup}
                        setdestination={setdestination}
                        activeField={activeField}
                    />
        </div>

      </div>

      <div ref={vehiclePanelref} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <VehiclePanel setconfirmridepanel={setconfirmridepanel} setvehiclePanel={setvehiclePanel}/>
      </div>

      <div ref={ConfirmRidePanelref} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <ConfirmRide setconfirmridepanel={setconfirmridepanel} setVehicleFound={setVehicleFound} />
       </div>

       <div ref={vehicleFoundref} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
         <LookingForDriver setVehicleFound={setVehicleFound} />
       </div>

       <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-12'>
         <WaitingForDriver  waitingForDriver={waitingForDriver} />
       </div>
      
    </div>
  )
}

export default Home