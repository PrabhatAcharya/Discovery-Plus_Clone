import React from 'react'
import "./Payment_2.css"
import cap from "../Images/Capture1.PNG"
const Payment_2 = () => {
  return (
    <div className='payment_body11'>
    <div className='gap77'>
    </div>
     <div className='payment_container1'>
       <p className='head_para1' > Enter Credit/Debit Card Details</p>
       <div className='amt_section1'>
        <div>
       
        </div>
        <div>
        To Pay ₹399.00
        </div>
       </div>
        <div className='image_section1'>
         <div>
            <p>CARD NUMBER</p>
            <input/>
         </div>
         <div className='exp'>
         <span> <p>EXPIRY DATE</p>
            <input/></span>
            <span> <p>CVV</p>
            <input/></span>
         </div>
         <div>
            <p>CARDHOLDER NAME</p>
            <input/>
         </div>
       
        <img src={cap} alt="some"/>
       
        
         <button>Accept & proceed</button>
        </div>
     </div>
    </div>
  )
}

export default Payment_2