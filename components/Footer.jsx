import React from 'react'
import { AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

function Footer() {
  return (
    <div className='footer-container'>
      <p>2022 LG HEADPHONES All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiFillLinkedin />
      </p>
      
    </div>
  )
}

export default Footer