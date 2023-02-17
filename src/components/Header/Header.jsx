import React from 'react'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Services from '../Services/Services'
import './header.css'

const Header = () => {
  return (
    <>
    <head class='
    container
    column
    d-flex
    mx-auto 
    gap-5
    align-items-center 
    text-white 
    p-4'>
      <div class='float-left'>
        <h1>Markins ICT</h1>
        </div>
        <div id='place_holder'>
        <a href='/Price' class='align-items-center
        p-2
        text-white' id='place__order'>
            Place Order
        </a>
      </div>
    </head>

    <NavBar />
    <Body />
    <Services />
    <Footer />
    </>
  )
}

export default Header