import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './KIDS_css/card.css'
import play from './play.png'
function Card() {
    const [state, setstate] = useState([]);
    const [state2, setstate2] = useState([]);
    const [loding, setloding] = useState(false);
    let getdata = async(size=1000)=>{
        setloding(false)
        let res  =  await fetch(`http://localhost:8080/Singham?_limit=${size}`)
        let data = await res.json();
        setstate(data);
        setloding(true);
    }
    let getdata2 = async(size=1000)=>{
        setloding(false)
        let res  =  await fetch(`http://localhost:8080/Watching?_limit=${size}`)
        let data = await res.json();
        setstate2(data);
        setloding(true);
    }

    useEffect(()=>{
        getdata(4);
        getdata2(4);
    },[]);
  //  console.log(state2)

  return (
    
    <>
    <div className='watching_cart'>
        <div className='flex-end'> 
        <h3>Everyone's Watching</h3>
        <button onClick={()=>getdata()}>View All</button>
        </div>
            
        <div className='card_container'>
                    {
            state.map((data, id)=>{
            return(
              <>
              <Link to="/watch">
              <div className='content_img' onClick={()=>{
                   localStorage.setItem("Clicked", JSON.stringify({data}));
                }}>
               
                <img src={data.img} alt=""  />
               <div className='hide_title'>
                   <div className='play_btn'>
                     <i class="fa-regular fa-circle-play"></i>
                     </div>
                    <h4>{data.title}</h4>
                    <p>{data.dis}</p>
               </div>
              </div>  </Link>
            
              </>
            )

            })
        }
     
    </div>
    </div>
    <br />
    <div className='watching_cart'>
        <div className='flex-end'> 
        <h3>Little Singham VS Kaal</h3>
        <button onClick={()=>getdata2()}>View All</button>
        </div>
            
        <div className='card_container'>
                    {
            state2.map((data, id)=>{
                
            return(
              <>
              
          <Link to="/watch">
              <div className='content_img' onClick={()=>{
                   localStorage.setItem("Clicked", JSON.stringify({data}));
                }}>
               
                <img src={data.img} alt=""  
                
                />
               <div className='hide_title'>
                   <div className='play_btn'>
                     <i class="fa-regular fa-circle-play"></i>
                     </div>
                    <h4>{data.title}</h4>
                    <p>{data.dis}</p>
               </div>
              </div>
          </Link>
              </>
            )

            })
        }
     
    </div>
    </div>
    </>
  )
}

export default Card
