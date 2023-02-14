import React from 'react'
import './price.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Pricelist = () => {
  return (
    <div class='container-fluid bg-white pt-4 pb-5' id='price-list'>
        <div class='container-fluid row justify-content-center'>
        <div class=' container-fluid col-4 text-left float-center'>
            <h1 id='price'>PRICELIST</h1>
        </div>

        <div class='btn col-2
        text-bold text-white
        text-center
        justify-content-center
        align-center' id='home'>
            <a href='/'><h6 class='text-white'>Home</h6></a>
        </div>

        </div>
        {/* PRICES */}
        <div class='container-fluid row justify-content-center
            align-center
            mt-5' id='price__container'>
            <div class='col-2 align-center'>
            <BsFillPatchCheckFill id='check'/>
            </div>
            <div class='col-4' id='price_item'>
                <h3>Flyer Design</h3>
            </div>
            <div class='col-2'>
                <h3>N3000</h3>
            </div>
            <div class='col-2 btn' id='order_button'>
                <a href='/request__form' class='text-white'>Order</a>
            </div>
            </div>

            <div class='container-fluid row justify-content-center
            align-center
            mt-5' id='price__container'>
            <div class='col-2 align-center'>
            <BsFillPatchCheckFill id='check'/>
            </div>
            <div class='col-4' id='price_item'>
                <h3>Banner Design</h3>
            </div>
            <div class='col-2'>
                <h3>N3000</h3>
            </div>
            <div class='col-2 btn' id='order_button'>
                <a href='/request__form' class='text-white'>Order</a>
            </div>
            </div>

            <div class='container-fluid row justify-content-center
            align-center
            mt-5' id='price__container'>
            <div class='col-2 align-center'>
            <BsFillPatchCheckFill id='check'/>
            </div>
            <div class='col-4' id='price_item'>
                <h3>E-Flyer Design</h3>
            </div>
            <div class='col-2'>
                <h3>N3000</h3>
            </div>
            <div class='col-2 btn' id='order_button'>
                <a href='/request__form' class='text-white'>Order</a>
            </div>
            </div>

            <div class='container-fluid row justify-content-center
            align-center
            mt-5' id='price__container'>
            <div class='col-2 align-center'>
            <BsFillPatchCheckFill id='check'/>
            </div>
            <div class='col-4' id='price_item'>
                <h3>Shirt Branding</h3>
            </div>
            <div class='col-2'>
                <h3>N600</h3>
            </div>
            <div class='col-2 btn' id='order_button'>
                <a href='/request__form' class='text-white'>Order</a>
            </div>
            </div>

            <div class='container-fluid row justify-content-center
            align-center
            mt-5' id='price__container'>
            <div class='col-2 align-center'>
            <BsFillPatchCheckFill id='check'/>
            </div>
            <div class='col-4' id='price_item'>
                <h3>Cap Branding</h3>
            </div>
            <div class='col-2'>
                <h3>N500</h3>
            </div>
            <div class='col-2 btn' id='order_button'>
                <a href='/request__form' class='text-white'>Order</a>
            </div>
            </div>

            <div class='container-fluid row justify-content-center
            align-center
            mt-5' id='price__container'>
            <div class='col-2 align-center'>
            <BsFillPatchCheckFill id='check'/>
            </div>
            <div class='col-4' id='price_item'>
                <h3>Car Branding</h3>
            </div>
            <div class='col-2'>
                <h3>N6000</h3>
            </div>
            <div class='col-2 btn' id='order_button'>
                <a href='/request__form' class='text-white'>Order</a>
            </div>
            </div>

            <div class='container-fluid row justify-content-center
            align-center
            mt-5' id='price__container'>
            <div class='col-2 align-center'>
            <BsFillPatchCheckFill id='check'/>
            </div>
            <div class='col-4' id='price_item'>
                <h3>Company Website Design</h3>
            </div>
            <div class='col-2'>
                <h3>N50000</h3>
            </div>
            <div class='col-2 btn' id='order_button'>
                <a href='/request__form' class='text-white'>Order</a>
            </div>
            </div>

            <div class='container-fluid row justify-content-center
            align-center
            mt-5' id='price__container'>
            <div class='col-2 align-center'>
            <BsFillPatchCheckFill id='check'/>
            </div>
            <div class='col-4' id='price_item'>
                <h3>School Website Design</h3>
            </div>
            <div class='col-2'>
                <h3>N55000</h3>
            </div>
            <div class='col-2 btn' id='order_button'>
                <a href='/request__form' class='text-white'>Order</a>
            </div>
            </div>

            <div class='container-fluid row justify-content-center
            align-center
            mt-5' id='price__container'>
            <div class='col-2 align-center'>
            <BsFillPatchCheckFill id='check'/>
            </div>
            <div class='col-4' id='price_item'>
                <h3>E-commerce Website Design</h3>
            </div>
            <div class='col-2'>
                <h3>N60000</h3>
            </div>
            <div class='col-2 btn' id='order_button'>
                <a href='/request__form' class='text-white'>Order</a>
            </div>
            </div>
            
            {/* END OF PRICES */}
        </div>
  )
}

export default Pricelist