import { Routes, Route } from 'react-router-dom'
import Watch from '../Kids_componanrts/Watch'

import Short from '../shorts/short'
import HomevedioPlay from '../LandingPage/HomevedioPlay'
import Kids from '../Kids_componanrts/Kids'
import Video_prem from '../Kids_componanrts/video_prem'
import { Home } from '../LandingPage/home'
import Signin from "../Login&Signup/Signin.jsx"
import {Premium} from "../Primium/Premium.jsx"
import Voucher from "../Primium/Voucher.jsx"
import Payment from "../Payment/Payment_1"
import Otp from "../Login&Signup/Otp"
import Signout from "../Login&Signup/Signout"
import Payment_2 from "../Payment/Payment_2"

function AllRouter() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path='' element={<Home/>} />
        <Route path='/kids' element={<Kids/>} />
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/shorts' element={<Short/>} />
        <Route path="/signin" element={<Signin/>}/>
        <Route path="voucher" element ={<Voucher/>}/> 
        <Route path="payment" element ={<Payment/>}/> 
        <Route path="/premium" element={<Premium/>}>
        </Route>
        <Route path="/otp" element ={<Otp/>}/> 
        <Route path="/payment2" element ={<Payment_2/>}/> 
        <Route path="/signout" element ={<Signout/>}/> 
        <Route path='/Shows_You_Love' element={<HomevedioPlay/>} />
        
        {/* <Route path='/premium' element={<Premium/>}/> */}
        <Route path='/shorts' element={<Short/>}/>
        <Route path='/videopremium' element={<Video_prem/>}/>
      </Routes>
    </div>
  )
}


export default AllRouter
