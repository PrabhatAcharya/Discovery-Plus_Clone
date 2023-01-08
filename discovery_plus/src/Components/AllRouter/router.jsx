import { Routes, Route } from 'react-router-dom'
import Watch from '../Kids_componanrts/Watch'

import Short from '../shorts/short'
import Kids from '../Kids_componanrts/Kids'
import Video_prem from '../Kids_componanrts/video_prem'
import { Home } from '../LandingPage/home'


function AllRouter() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path='/kids' element={<Kids/>} />
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/shorts' element={<Short/>}/>
        <Route path='/videopremium' element={<Video_prem/>}/>
      </Routes>
    </div>
  )
}


export default AllRouter
