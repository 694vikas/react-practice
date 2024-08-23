import React from 'react';
import logo from '../Assets/puma-logo.jpg';
import "./Header.css"


function Header() {
  return (
    <> <div className='header'>
        <div className='logo'> <img src={logo} alt="logo"  />
        </div> 
<div className='menu-item'>
    <ul>
        <li>Home</li>
        <li>Kids</li>
        <li>Men</li>
        <li>Women</li>
        <li>Sports</li>
    </ul>
</div>



    </div>
    </>
  )
}

export default Header