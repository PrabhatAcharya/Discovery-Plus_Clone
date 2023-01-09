import React from 'react'
import "./Voucher.css"
import {Link} from "react-router-dom"
import Payment from "../Payment/Payment_1"
const Voucher = () => {
  return (
    <div className='body1'>
    <div className='gap1'>
    </div>
      <div className='voucher_container'>
       <div className='image_part'>
        <img src="https://auth.discoveryplus.in/logo-f12d84939e917975825b77ad0a95e8f0.png"/>
       </div>
       <br></br>
        <div className='voucher_heading'>
            <h1>Redeem Voucher</h1>
        </div>
        <div>
            <input placeholder='Enter voucher code'/>
        </div>
        <div>
            <p>By clicking on the button, I agree to the Terms of Use</p>
        </div>
        <div>
       <Link to="/payment">
          <button>
                Continue
            </button>
  </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Voucher