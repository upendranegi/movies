import React from 'react'
import './css/flimes.css'

export default function Flimes(props) {
  return (
    <div className='movie'>
      
      <div className='mvimg' >
        <img className='img' src={props.imgs} alt=""/>
        
      </div>

      <div className='mvsum'>
      <p className='Name'> Full Name :<b> {props.name} </b></p>
      <p className='lang'>Language:<b>{props.lang}</b></p>
       
       <button className='btn' type="sumit"> <a className='link1' target='_blank' href={props.links}> Watch Movie</a> </button>
      </div>
    </div>
  )
}

