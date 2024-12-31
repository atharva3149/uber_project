import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './Pages/Start'
import Userlogin from './Pages/Userlogin'
import Usersignup from './Pages/Usersignup'
import Captainlogin from './Pages/Captainlogin'
import Captainsignup from './Pages/Captainsignup'
import Home from './Pages/Home'
import UserProtectWrapper from './Pages/UserProtectWrapper'
import UserLogout from './Pages/UserLogout'
import CaptainHome from './Pages/CaptainHome'
import CaptainProtectWrapper from './Pages/CaptainProtectWrapper'
import CaptainLogout from './Pages/CaptainLogout'



const App = () => {

 
  return (
    <div>
    <Routes>
      <Route  path='/' element={<Start/>}/>
      <Route  path='/login' element={<Userlogin/>}/>
      <Route path = '/signup' element={<Usersignup/>}/>
      <Route path = '/captain-login' element={<Captainlogin/>}/>
      <Route path = '/captain-signup' element={<Captainsignup/>}/>

      <Route path = '/home'
       element ={
        <UserProtectWrapper>
          <Home/>
        </UserProtectWrapper>
      }/>

      <Route path='/users/logout' 
      element={<UserProtectWrapper>
       <UserLogout/>
      </UserProtectWrapper>}
      />
      <Route path='/captain-home' element={
        <CaptainProtectWrapper>
          <CaptainHome/>
        </CaptainProtectWrapper>
      }/>

<Route path='/captains/logout' 
      element={<CaptainProtectWrapper>
       <CaptainLogout/>
      </CaptainProtectWrapper>}
      />
    </Routes>
    </div>
  )
}

export default App