import React from 'react'
import "./Signout.css"
import {Link} from "react-router-dom"
const Signout = () => {
  return (
    <div className='body2'>
    <div className='gap4'>

    </div>
       <div className='Signout_container'>
          <div>
            <p className='Account_heading'>Account</p>
          </div>
          <hr className='break'></hr>
          <div>
            <div>
                <p>Personal details</p>
               
                 <p>+91 7355167733</p>
            </div>
            <hr className='break'></hr>
            <div className='Sub_section'>
              <div>
              <p>Subscription details</p>
                 <p>No discovery+ Premium Subscription Found.</p>
              </div>
             <div >
                <button style={{backgroundColor:"#2175d9",color:"white"}}>
                    Subscribe now
                </button>
             </div>
             
            </div>
            <hr className='break'></hr>
             <div className='two_button'>
             <span><button style={{color:"white"}}>Sign Out</button></span>
              <span><button style={{backgroundColor:"#2175d9",color:"white"}}>Back</button></span>
             
           
             </div>


          </div>
       </div>
    </div>
  )
}

export default Signout