import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Kids from '../Kids_componanrts/Kids'
import Watch from '../Kids_componanrts/Watch'
function AllRouter() {
  return (
    <div>
      <Routes>
        {/* <Route path='/' /> */}
        <Route path='/' element={<Kids/>} />
        <Route path='/watch' element={<Watch/>}/>
      </Routes>
    </div>
  )
}

export default AllRouter
