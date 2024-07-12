import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function Home() {
  const navigate = useNavigate()
  const {isSuc} = useSelector(state=> state.loginreducer)

  useEffect(()=>{
    if (!isSuc) {
      navigate('/Login')
   }
  })
  return (
    <>
      <h1 className='text-white'>Hello....i m Home page</h1>
    </>
  )
}

export default Home
