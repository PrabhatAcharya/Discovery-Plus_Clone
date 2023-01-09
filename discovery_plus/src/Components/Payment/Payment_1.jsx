import React from 'react'
import "./Payment_1.css"
import  payment from "../Images/Capture2.PNG"
import {Link} from "react-router-dom"

const Payment_1 = () => {
  return (
    <div className='payment_body'>
    <div className='gap7'>
  
    </div>
     <div className='payment_container'>
       <p className='head_para' >Payment</p>
       <div className='amt_section'>
        <div>
            399
        </div>
        <div>
        To Pay ₹399.00
        </div>
       </div>
        <div className='image_section'>
           <Link to="/payment2">
           <img src={payment} />
           </Link>
          
        </div>
     </div>
    </div>
  )
}

export default Payment_1