import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import {AiFillHome} from 'react-icons/ai'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.SendForm('fahyvor', 'template_6djgdrq', form.current, 'Amff1N1IhpL2XK1Q6')

        e.target.reset();

    };

  return (
    <div>
        <div id='home__icon' class='m-4'>
            <a href='/'>
            <AiFillHome color='var(--color-white)' size={50}/>
            </a>
        </div>
        <form ref={form} onSubmit={sendEmail} class='container row
        align-center gap-4
        justify-content-center
        mx-auto
        mt-5
        mb-4
        pb-4
        '>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Email Address" required/>
            <input type="text" name="whatsapp_contact" placeholder="Whatsapp Contact" />
            <select name="Flyer Design" required>
                <option value="banner">Banner Design</option>
                <option value="e-flyer">E-flyer Design</option>
                <option value="shirt-branding">Shirt Branding</option>
                <option value="cap-branding">Cap Branding</option>
                <option value="car-branding">Car Branding</option>
                <option value="comp-website">Company Website</option>
                <option value="school-web">School Website</option>
                <option value="ecommerce-web">E-commerce Website</option>
            </select>

            <input type="number" name="quantity" placeholder="0" required />
            <textarea type="message" name="message" placeholder='Additional Details' required />
            <button type="submit" class='btn'>Send Order</button>
        </form>
    </div>
  )
}

export default Contact