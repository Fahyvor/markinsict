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
        justify-content-center
        align-center' id='home'>
            <a href='/' class='text-white
            text-center' id='home_link'><h6>Home</h6></a>
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
                <h4>Flyer Design</h4>
            </div>
            <div class='col-2'>
                <h4>N3000</h4>
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
                <h4>Banner Design</h4>
            </div>
            <div class='col-2'>
                <h4>N3000</h4>
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
                <h4>E-Flyer Design</h4>
            </div>
            <div class='col-2'>
                <h4>N3000</h4>
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
                <h4>Shirt Branding</h4>
            </div>
            <div class='col-2'>
                <h4>N600</h4>
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
                <h4>Cap Branding</h4>
            </div>
            <div class='col-2'>
                <h4>N500</h4>
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
                <h4>Car Branding</h4>
            </div>
            <div class='col-2'>
                <h4>N6000</h4>
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
                <h4>Company Website Design</h4>
            </div>
            <div class='col-2'>
                <h4>N50000</h4>
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
                <h4>School Website Design</h4>
            </div>
            <div class='col-2'>
                <h4>N55000</h4>
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
                <h4>E-commerce Website Design</h4>
            </div>
            <div class='col-2'>
                <h4>N60000</h4>
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