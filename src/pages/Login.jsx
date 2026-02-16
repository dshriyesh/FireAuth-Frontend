import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
    const navigate = useNavigate()
    const [state, setState] = useState("Sign Up")
    
    const { backendUrl, setIsLoggedin, setUserData } = useContext(AppContext)
    
    const [formdata, SetFormdata] = useState({
        fullname: '',
        username: "",
        email: '',
        password: '',
        confirmPassword: ""
    })

    const handleChange = (e) => {
        SetFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            axios.defaults.withCredentials = true
            
            if (state === 'Sign Up') {
                // Destructure from formdata, not global scope
                const { fullname, email, username, password, confirmPassword } = formdata
                
                // Validate password match
                if (password !== confirmPassword) {
                    toast.error('Passwords do not match!')
                    return
                }
                
                const { data } = await axios.post(`${backendUrl}/api/v1/users/register`,  {
                    fullname,
                    email,
                    username,
                    password
                })
                
                if (data.success) {
                    if (data.success) {
                        toast.success('Registration successful! Please login.')
                        getUserData()
                        setState("Login")
                    }
                } else {
                    toast.error(data.message)
                }
            } else {
                // Destructure from formdata
                const { email, password } = formdata
                
                const { data } = await axios.post(`${backendUrl}/api/v1/users/login`, {
                    email,
                    password
                })
                
               if (data.success) {
                    setIsLoggedin(true)
                    setUserData(data.data.user)   // 🔥 DIRECTLY SET USER
                    toast.success('Login successful!')
                    navigate('/home')
                } else {
                    toast.error(data.message)
                }
            }
        } catch (error) {
            // Fixed: error.response.data.message instead of data.message
            toast.error(error.response?.data?.message || 'An error occurred. Please try again.')
            console.error('Error:', error)
        }
    }

    return (
        <>
            <header className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-white">
                <img 
                    onClick={() => navigate('/home')} 
                    src={assets.fireAuthlogo} 
                    alt="FireAuth Logo" 
                    className='w-28 sm:w-32 cursor-pointer' 
                />
                <nav className="flex gap-6 mt-3 md:mt-0"></nav>
                <div>
                    <button className="px-6 py-2 bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition duration-200">
                        Sign In
                    </button>
                </div>
            </header>

            <div className='min-h-screen bg-white flex items-center justify-center'>
                <div className='w-full max-w-md px-6'>
                    <h1 className='text-4xl font-bold text-orange-600 mb-8 text-center'>
                        {state === "Sign Up" ? 'Register' : 'Login'}
                    </h1>
                    
                    <div className='bg-white border-2 border-gray-200 rounded-lg shadow-lg p-8'>
                        <form onSubmit={handleSubmit}>
                            {state === "Sign Up" && (
                                <div className='mb-4'>
                                    <label className='block text-gray-700 text-sm font-semibold mb-2'>
                                        Full Name
                                    </label>
                                    <input 
                                        type='text' 
                                        name='fullname'
                                        value={formdata.fullname}  
                                        onChange={handleChange}
                                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500'
                                        placeholder='Enter your name'
                                        required
                                    />
                                </div>
                            )}
                            
                            {state === "Sign Up" && (
                                <div className='mb-4'>
                                    <label className='block text-gray-700 text-sm font-semibold mb-2'>
                                        Username
                                    </label>
                                    <input 
                                        type='text'
                                        name="username"
                                        value={formdata.username}
                                        onChange={handleChange} 
                                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500'
                                        placeholder='Enter Username'
                                        required
                                    />
                                </div>
                            )}
                            
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-semibold mb-2'>
                                    Email
                                </label>
                                <input 
                                    type='email' 
                                    name="email"
                                    value={formdata.email}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500'
                                    placeholder='Enter your email'
                                    required
                                />
                            </div>

                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-semibold mb-2'>
                                    Password
                                </label>
                                <input 
                                    type='password' 
                                    name='password'
                                    value={formdata.password}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500'
                                    placeholder='Enter your password'
                                    required
                                />
                            </div>

                            {state === "Sign Up" && (
                                <div className='mb-6'>
                                    <label className='block text-gray-700 text-sm font-semibold mb-2'>
                                        Confirm Password
                                    </label>
                                    <input 
                                        type='password' 
                                        name='confirmPassword'  
                                        value={formdata.confirmPassword}
                                        onChange={handleChange}
                                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500'
                                        placeholder='Confirm your password'
                                        required
                                    />
                                </div>
                            )}
                        
                            <button 
                                type='submit'
                                className='w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-200'
                            >
                                {state}
                            </button>
                        </form>

                        <div className='block text-center mt-6'>  
                            {state === "Sign Up" ? (
                                <p className='text-lg font-bold text-orange-600'>
                                    Already have an account? 
                                    <span 
                                        onClick={() => setState('Login')} 
                                        className='cursor-pointer underline ml-1'
                                    >
                                        Login here
                                    </span>
                                </p>
                            ) : (
                                <p className='text-lg font-bold text-orange-600'>
                                    Don't have an account?
                                    <span 
                                        onClick={() => setState('Sign Up')} 
                                        className='cursor-pointer underline ml-1'
                                    >
                                        Sign Up
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login