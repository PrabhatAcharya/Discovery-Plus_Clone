import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Kids from '../Kids_componanrts/Kids'
import Watch from '../Kids_componanrts/Watch'
// import { Premium } from '../Primium/Premium'
import { Home } from '../LandingPage/home'
import Short from '../shorts/short'
import HomevedioPlay from '../LandingPage/HomevedioPlay'
function AllRouter() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/kids' element={<Kids/>} />
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/shorts' element={<Short/>} />
        <Route path='/Shows_You_Love' element={<HomevedioPlay/>} />
        
        {/* <Route path='/premium' element={<Premium/>}/> */}
      </Routes>
    </div>
  )
}


export default AllRouter
