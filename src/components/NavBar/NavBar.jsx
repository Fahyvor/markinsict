import React from 'react'
import './index.css'

const NavBar = () => {
  return (
    <nav class='container-fluid
    row
    text-center
    align-center
    justify-content-center
    bg-white
    p-3
    gap-3
    ' id='nav-container'>
      
          <div class='col-sm-2 align-center' id='writing'><h5>Graphics & Design</h5></div>
          <div class='col-sm-2 align-center' id='writing'><h5>Logo Design</h5></div>
          <div class='col-sm-2 align-center' id='writing'><h5>Calender design</h5></div>
          <div class='col-sm-2 align-center' id='writing'><h5>Flyers</h5></div>
          <div class='col-sm-2 align-center' id='writing'><h5>Banners</h5></div>
          <div class='col-sm-2 align-center' id='writing'><h5>Cap Branding</h5></div>
          <div class='col-sm-2 align-center' id='writing'><h5>Brochures</h5></div>
          <div class='col-sm-2 align-center' id='writing'><h5>Branding</h5></div>
          <div class='col-sm-2 align-center' id='writing'><h5>Shirt Branding</h5></div>
          <div class='col-sm-2 align-center' id='writing'><h5>Jotters</h5></div>
    </nav>
  )
}

export default NavBar