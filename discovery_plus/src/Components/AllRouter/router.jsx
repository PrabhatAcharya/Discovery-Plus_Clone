import { Routes, Route } from 'react-router-dom'
import Watch from '../Kids_componanrts/Watch'
// import { Premium } from '../Primium/Premium'
import Short from '../shorts/short'
import Kids from '../Kids_componanrts/Kids'
// import Video_prem from '../Kids_componanrts/video_prem'
import { Home } from '../LandingPage/home'
import { Explore } from '../explore/explore'

function AllRouter() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path='/explore's element={<Explore/>}/>
        <Route path='/kids' element={<Kids/>} />
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/shorts' element={<Short/>}/>
      </Routes>
    </div>
  )
}


export default AllRouter