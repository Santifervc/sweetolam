import React from 'react'
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav>
      <div>
        <img className='logo' src="src\images\Logo.jpg" alt="" />
      </div>
      <div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/MakeYourOwn">Make Your Own Event</a></li>
        </ul>
      </div>
      <div>
        <Link to="/register">REGISTER</Link>
        <br />
        <Link to="/login">LOGIN</Link>
      </div>
    </nav>
  )
}

export default Navbar;