import React from 'react'
import { json } from 'react-router-dom';
import style from "./KIDS_css/card.css"
import Video from './video';
function Watch() {
    let data=JSON.parse(localStorage.getItem("Clicked"))|| []
   
  return (
   <div>
      <Video/>
   </div>
  )
   
}

export default Watch
