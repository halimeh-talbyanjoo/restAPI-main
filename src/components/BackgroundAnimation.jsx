import React, { useState } from 'react'

const BackgroundAnimation = () => {
    const [boxShadow,setBoxShadow] = useState('inset 5px 5px 15px rgba(0,0,0,0.15),inset -5px -5px 15px rgba(255,255,255,0.15), 5px 5px 15px rgba(0,0,0,0.15), -5px -5px 15px rgba(252, 236, 19, 0.15)');
    return (
    <ul className='background'>
      <li style={{background:boxShadow}}></li>
      <li style={{boxShadow:boxShadow}}></li>
      <li style={{boxShadow:boxShadow}}></li>
      <li style={{boxShadow:boxShadow}}></li>
      <li style={{boxShadow:boxShadow}}></li>
      <li style={{boxShadow:boxShadow}}></li>
      <li style={{boxShadow:boxShadow}}></li>
      <li style={{boxShadow:boxShadow}}></li>
      <li style={{boxShadow:boxShadow}}></li>
      <li style={{boxShadow:boxShadow}}></li>
      <li style={{boxShadow:boxShadow}}></li>
      <li style={{boxShadow:boxShadow}}></li>
      <li style={{boxShadow:boxShadow}}></li>
      
    </ul>
  )
}

export default BackgroundAnimation
