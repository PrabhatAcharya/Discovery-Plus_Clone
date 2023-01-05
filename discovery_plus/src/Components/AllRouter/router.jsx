<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Kids from '../Kids_componanrts/Kids'
import Watch from '../Kids_componanrts/Watch'
import { Premium } from '../Primium/Premium'
function AllRouter() {
  return (
    <div>
      <Routes>
        {/* <Route path='/' /> */}
        <Route path='/kids' element={<Kids/>} />
        <Route path='/watch' element={<Watch/>}/>
        {/* <Route path='/premium' element={<Premium/>}/> */}
      </Routes>
    </div>
  )
}

export default AllRouter
=======
const explore=()=>{
    return <>
    <div id="screen" style={{height: "100%", width: "100%", backgroundColor: "#1a1c21"}}>

    </div>
    
    </>
}
>>>>>>> d1dfaa92a5d5381be905e75c0b9c56e3226af834
