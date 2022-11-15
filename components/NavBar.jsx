import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

function NavBar() {
  return (
    <div className='navbar-container'>
        <p className='logo'>
            <Link href='/'>LG HEADPHONE</Link>
        </p>

        <button type='button' className='cart-icon' onClick={''}>
            <AiOutlineShopping />
            <span className='cart-item-qty'>TOTAL QUANTITY</span>

        </button>
        
    </div>
  )
}

export default NavBar