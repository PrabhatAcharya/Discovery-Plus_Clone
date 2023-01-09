import React from 'react'
import "./otp.css"
import { Link,NavLink } from 'react-router-dom'


const Otp = () => {
  return (
   <div className='otp_body'>
   <div className='gap_again'></div>
    <div className='otp_container'>
     
        <h2 className='head'>Sign In & Subscribe</h2>
        <p>An OTP has been sent to +91 7355167733.</p>
        <input placeholder='OTP' className='input_tag'/>
      
      <button className='otp_btn'>Submit</button>
   
       
        
        
     
    </div>
    </div>
   
  )
}

export default Otp