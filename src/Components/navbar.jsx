import React from 'react'
import {assets} from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'


const  Navbar = ()=> {

    const navigate=useNavigate()

  return (
    <div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0'>
      <img src={assets.fireAuthlogo} alt="" className='w-28 sm:w-32' />

      <button onClick={()=>navigate('/login')}
      className="flex items-center gap-2 px-6 py-4 bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition duration-200">
      Sign In <img className='h-5 w-5' src={assets.arrow} alt="arrow-icon" />
    </button>


    </div>
  )
}

export default Navbar
