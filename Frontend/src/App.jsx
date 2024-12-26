import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home'
import Userlogin from './Pages/Userlogin'
import Usersignup from './Pages/Usersignup'
import Captainlogin from './Pages/Captainlogin'
import Captainsignup from './Pages/Captainsignup'



const App = () => {

 
  return (
    <div>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/login' element={<Userlogin/>}/>
      <Route path = '/signup' element={<Usersignup/>}/>
      <Route path = '/captain-login' element={<Captainlogin/>}/>
      <Route path = '/captain-signup' element={<Captainsignup/>}/>
    </Routes>
    </div>
  )
}

export default App