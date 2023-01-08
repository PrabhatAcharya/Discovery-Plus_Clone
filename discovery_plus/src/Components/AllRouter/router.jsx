import { Routes, Route } from 'react-router-dom'
import Watch from '../Kids_componanrts/Watch'

import Short from '../shorts/short'
import HomevedioPlay from '../LandingPage/HomevedioPlay'
import Kids from '../Kids_componanrts/Kids'
import Video_prem from '../Kids_componanrts/video_prem'
import { Home } from '../LandingPage/home'
import { Explore } from '../explore/explore'


function AllRouter() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path='' element={<Home/>} />
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/kids' element={<Kids/>} />
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/shorts' element={<Short/>} />
        <Route path='/Shows_You_Love' element={<HomevedioPlay/>} />
        
        {/* <Route path='/premium' element={<Premium/>}/> */}
        <Route path='/shorts' element={<Short/>}/>
        <Route path='/videopremium' element={<Video_prem/>}/>
        <Route path='*' element={<div>Not Found</div>}/>
      </Routes>
    </div>
  )
}


export default AllRouter
