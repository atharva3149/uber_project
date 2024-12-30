import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './Pages/Start'
import Userlogin from './Pages/Userlogin'
import Usersignup from './Pages/Usersignup'
import Captainlogin from './Pages/Captainlogin'
import Captainsignup from './Pages/Captainsignup'
import Home from './Pages/Home'
import UserProtectWrapper from './Pages/UserProtectWrapper'



const App = () => {

 
  return (
    <div>
    <Routes>
      <Route  path='/' element={<Start/>}/>
      <Route  path='/login' element={<Userlogin/>}/>
      <Route path = '/signup' element={<Usersignup/>}/>
      <Route path = '/captain-login' element={<Captainlogin/>}/>
      <Route path = '/captain-signup' element={<Captainsignup/>}/>
      <Route path = '/home' element ={
        <UserProtectWrapper>
          <Home/>
        </UserProtectWrapper>
      }/>
      <Route path='/user/logout' element={<UserProtectWrapper>
       <UserLogout/>

      </UserProtectWrapper>}
      />
    </Routes>
    </div>
  )
}

export default App