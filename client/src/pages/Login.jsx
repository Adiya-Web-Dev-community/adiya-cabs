import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Input,Button} from '../components/form'
import { BsArrowLeft  } from 'react-icons/bs'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';
import MapCotainer from '../components/MapCotainer'

const Login = () => {

  const [loginInfo, steLoginInfo] = useState({
    email: '',
    otp:'' 
  })
 

  const [activeVarification,setVriFiactionActive] = useState(false)



  const handleChange = (e) => {
    steLoginInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmitLoginInfo = async (e,name) => {

    const path = activeVarification?'/verify-otp':'/user-signin'

    const loadingToast = toast.info('Sending OTP...', { autoClose: false });

    e.preventDefault()
    try {
      const response = await axios.post(`http://localhost:5000${path}`,{[name]:loginInfo[name]},{
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast.success('User data posted successfully');  
      toast.dismiss(loadingToast);


      if (!response.statusText==='OK') {
        throw new Error('Network request failed');
      }else{
        setVriFiactionActive(true)
      }
    } catch (error) {      
      toast.error(`Error: ${error.message}`);
      toast.dismiss(loadingToast);
    }
  }







  return (
    <div className='min-h-[fit-content] h-[100vh] bg-gray-400 flex justify-end items-center relative '>
     <ToastContainer  position='top-right' />
     <MapCotainer/>
      {!activeVarification?<form onSubmit={(e)=>handleSubmitLoginInfo(e,'email')} className='w-[24rem] mr-16  z-[500] bg-white rounded-md p-4 '>
      <h2 className='m-5 mb-16 text-2xl'>Let’s Sign You In!</h2>
        <Input name={'Name'} type={'text'} label={'Name*'} required className='m-5 mb-8' onChange={handleChange} value={loginInfo.Email} />
        <Input name={'email'} type={'email'} label={'Email*'} required className='m-5 mb-24' onChange={handleChange} value={loginInfo.Email} />

        <div className='flex justify-center items-center mt-4 mb-2'>
         <Button> SEND OTP</Button>
        </div>
      </form>:<form onSubmit={(e)=>handleSubmitLoginInfo(e,'otp')} className='w-[24rem]  mr-16   bg-white rounded-md p-4 z-[500]'>
      <h2 className='m-5 mb-16 text-2xl' onClick={()=>setVriFiactionActive(false)}>Go Back To Email</h2>
        <Input name={'otp'} type={'number'} label={'OTP'} required className='m-5 mb-24' onChange={handleChange} value={loginInfo.otp} />

        <div className='flex justify-center items-center mt-4 mb-2'>
         <Button> Verify</Button>
        </div>
      </form>}
    </div>
  )
}



export {Login}



