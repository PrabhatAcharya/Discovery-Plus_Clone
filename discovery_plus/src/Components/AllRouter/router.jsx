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
        <Route path='/' element={<Kids/>} />
        <Route path='/watch' element={<Watch/>}/>
        {/* <Route path='/premium' element={<Premium/>}/> */}
      </Routes>
    </div>
  )
}

export default AllRouter
