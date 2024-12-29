import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './Pages/Start'
import Userlogin from './Pages/Userlogin'
import Usersignup from './Pages/Usersignup'
import Captainlogin from './Pages/Captainlogin'
import Captainsignup from './Pages/Captainsignup'
import Home from './Pages/Home'



const App = () => {

 
  return (
    <div>
    <Routes>
      <Route  path='/' element={<Start/>}/>
      <Route  path='/login' element={<Userlogin/>}/>
      <Route path = '/signup' element={<Usersignup/>}/>
      <Route path = '/captain-login' element={<Captainlogin/>}/>
      <Route path = '/captain-signup' element={<Captainsignup/>}/>
      <Route path = '/home' element ={<Home/>}/>
    </Routes>
    </div>
  )
}

export default App