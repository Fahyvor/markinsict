import React from 'react'
import './body.css'
import Bodyimage from '../../assets/Body-image.png'

const Body = () => {
  return (
    <body class='container-fluid
    row
    text-white
    gap-3
    d-flex
    align-center
    justify-content-center
    pb-3
    ' id='body-container'>
        <div class='container-fluid
        col
        pt-4
        align-items-center' id='write-up'>
        <h1 class='mt-5' id='whole'>A WHOLE WORLD</h1>
        <h4 class='text-end' id='freelance'>...of Freelance at your Finger Tips</h4>
        <h2 class=' mt-5 ' id='find'>FIND THE RIGHT FREELANCER</h2>
        <h5 class='text-end
        mr-3' id='begin'>to begin on your project within minutes</h5>
        
        <div class=' container-fluid 
        p-1
        mt-5' 
        id='protect'>
            <h5><small><i>Protected Payments,
                Your payments isn't released until you
                approve the work. Our support team is available to help 24/7
                </i>
                </small>
            </h5>
        </div>
        </div>
        
        <div class='container col' id='image-container'>
          <img src={Bodyimage} id='body-image' />
        </div>
    </body>
  )
}

export default Body