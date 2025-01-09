import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";
import { useEffect , useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainHome = () => {

const [ridepopuppanel, setridepopuppanel] = useState(true)
const [ConfirmRidePopuppanel, setConfirmridepopuppanel] = useState(false)

const ridepopuppanelRef = useRef(null)
const ConfiermRidepopuppanelRef = useRef(null)

const { socket } = useContext(SocketContext)
const {captain} = useContext(CaptainDataContext)


useEffect(()=>{
  socket.emit('join',{
    userId : captain._id,
    userType: 'captain'
  })
})

useGSAP(function(){
  if(ridepopuppanel){
   gsap.to(ridepopuppanelRef.current,{
      transform:'translateY(0)'
    })
  }
  else{
    gsap.to(ridepopuppanelRef.current,{
      transform:'translateY(100%)'
    })
  
  }
},[ridepopuppanel])

useGSAP(function(){
  if(ConfirmRidePopuppanel){
   gsap.to(ConfiermRidepopuppanelRef.current,{
      transform:'translateY(0)'
    })
  }
  else{
    gsap.to(ConfiermRidepopuppanelRef.current,{
      transform:'translateY(100%)'
    })
  
  }
},[ConfirmRidePopuppanel])



  return (
    <div className="h-screen ">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16  "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to={"/captain-home"}
          className=" h-10 w-10  bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-2/5 p-6">
      <CaptainDetails/>
      </div>

      <div ref={ridepopuppanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
      <RidePopup setConfirmridepopuppanel={setConfirmridepopuppanel} setridepopuppanel={setridepopuppanel} />
      </div>

      <div ref={ConfiermRidepopuppanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
      <ConfirmRidePopup setConfirmridepopuppanel={setConfirmridepopuppanel} setridepopuppanel={setridepopuppanel} />
      </div>
    </div>
  );
};

export default CaptainHome;
