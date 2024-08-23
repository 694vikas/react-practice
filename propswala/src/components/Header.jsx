import React from 'react'
import { NavLink } from 'react-router-dom';
 

function Header() {
  return (
    <div className='nav'> 
      <NavLink to={"/"}> All  </NavLink>
      <NavLink to={"/Javascript"}> JavaScript  </NavLink>
      <NavLink to={"/Study"}> Study  </NavLink>
      <NavLink to={"/Music"}> Music </NavLink>

    </div>
  )
}

export default Header;