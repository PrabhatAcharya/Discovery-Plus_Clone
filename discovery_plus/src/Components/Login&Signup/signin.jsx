import React from 'react'
import { Link } from 'react-router-dom'
import "./signin.css"
import Otp from "../Login&Signup/Otp"
const Signin = () => {
  return (
    <div className='body'>
      
       <h2>Sign In Now</h2>

       <div className='Login-container'>
       <div className='top_heading'> <p>Please sign in with your mobile number</p></div>
      
       <form>
       <div className='input_field'>
       
       <input placeholder='Mobile Number'/>
       </div>
        <div className='button_otp'>
        <Link to="/otp">
        <button>Get otp</button>
        </Link>
       
        </div>
       
       </form>
       </div>
       <div className='bottom_option'>
       <p>Social sign in only for</p>
       <Link style={{color:"skyblue"}}>Existing user ></Link>
      <p>By signing in, you agree to our Privacy Policy & Terms of Use</p>
       </div>
    </div>
  )
}

export default Signin