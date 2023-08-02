import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Authentication'
function Navbar() {
  const auth = useAuth()
  return (
    <div>
      <nav className='nav1'>
      <img className="headerimage" src={"./images/programming.png"} alt="" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        {!auth.user &&
          <NavLink to="/login">Login</NavLink> 
        }
      </nav>
    </div>
  )
}

export default Navbar
