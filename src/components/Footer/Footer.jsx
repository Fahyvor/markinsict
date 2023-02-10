import React from 'react'
import './index.css'
import { FaFacebook } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
   
    <div class='container-fluid
    justify-content-center'>
      <div class='d-flex
      justify-content-center
      gap-2'>
      <div class='mt-3 pb-3'>
        <a href='https://www.facebook.com/' id='social-media-icon'>
        <FaFacebook className='icons__social' color='var(--color-white)'/>
        </a>
      </div>

      <div class='mt-3 pb-3'>
        <a href='https://api.whatsapp.com/send/?phone=2349072033837&text&type=phone_number&app_absent=0' id='social-media-icon'>
        <BsWhatsapp className='icons__social' color='var(--color-white)'/>
        </a>
      </div>

      </div>

      <div class='
      container-fluid
      text-center
      text-white
      '>
        <h5 class='text-bold'>&copy; {new Date().getFullYear()}</h5>
      </div>
    </div>
    
  )
}

export default Footer