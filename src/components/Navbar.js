import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from './images/logo.png'


const Navbar = () => {
  return (
    <div className='header'>
       <nav className='navbar'>
           <a href='/' className='logo'>
           <img src={logo} alt='logo' />
        </a>
        <div className='hamburger'>
         <FaBars />
        </div>
          <ul className='nav-menu'>
            

        </ul>
       </nav>
    </div>
  )
}

export default Navbar