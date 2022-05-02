import React from 'react'
import logo from '../images/airbnb-logo.png'
function Navbar() {
  return (
    <div className='navbar--logo--container'>
        <img src={logo} alt='airbnb logo' className='navbar--logo' />
    </div>
  )
}

export default Navbar