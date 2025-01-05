import React from 'react'

const LocationSearchPanel = (props) => {


  // sample array for location

  const locations = [
        ' 24B, Near India Cafe, Dombivli West, Thane',
        ' 22B, Near Mumbai Cafe, Dombivli West, Thane',
        ' 20B, Near USA Cafe, Dombivli West, Thane',
        ' 26B, Near XYZ Cafe, Dombivli West, Thane',
      ]

  return (
    <div>

{/* sample data */}

{locations.map(function(elem , idx){
  return   <div key={idx} onClick={()=>{
    props.setvehiclePanel(true)
    props.setpanelopen(false)
  }} className='flex gap-4  border-2 p-3 border-gray-50 active:border-black rounded-xl  items-center my-2 justify-start  '>
  <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
  <h4 className='font-medium'> {elem}</h4>
 </div>

})}

     

    </div>
  )
}

export default LocationSearchPanel