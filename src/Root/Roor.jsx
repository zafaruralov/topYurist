import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../Auth/Auth'
import AuthSms from '../AuthSms/AuthSms'
import Navbar from '../Navbar/Navbar'
import Refigister from '../Register/Register'
import './style'

const Roor = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Auth/>} />
        <Route path='/sms' element={<AuthSms/>} />
        <Route path='/register' element={<Refigister/>} />
        <Route path='/profile' element={<Navbar/>} />
      </Routes>
    </div>
  )
}

export default Roor