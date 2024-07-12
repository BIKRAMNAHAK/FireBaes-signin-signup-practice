import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import { Route, Routes } from 'react-router'
import SignUp from './Components/Singup/SignUp'
import Home from './Components/Home/Home'


function App() {
 

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
