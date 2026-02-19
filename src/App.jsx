import { useState } from 'react'
import './App.css'
import fireAuthlogo from './assets/fireAuthlogo.png'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import React from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Login/>}/> 
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>        
      </Routes>
      {/* <Form/> */}
    </div>
    </>
  )
}

export default App
