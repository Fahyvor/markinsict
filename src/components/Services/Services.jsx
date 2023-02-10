import React from 'react'
import './index.css'
import service1 from '../../assets/service1.webp'
import service2 from '../../assets/service2.jpg'
import service3 from '../../assets/service3.webp'

const Services = () => {
  return (
    <services class='container-fluid
    bg-white
    pb-5
    justify-content-center
    pt-5
    gap-2
    row
    align-items-center
    d-flex' id='services-container'>
      <div class='col pb-3'>
        <img src={service1} class='img-rounded' 
        width='85%' height='100%' id='serv'/>
      </div>

      <div class='col pb-3'>
        <img src={service2} 
        class='img-rounded' 
        width='85%' height='100%' id='serv'/>
      </div>
      <div class='col pb-3'>
        <img src={service3} 
        class='img-rounded ml-3' 
        width='83%' height='90%' id='serv'/>
      </div>
    </services>
  )
}

export default Services