import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/data/authContext';
import { auth } from '../../Config/Config';

export const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        // Logout successful, you can perform additional actions if needed
        console.log('User logged out successfully');
      })
      .catch((error) => {
        // Handle errors during logout
        console.error('Error during logout:', error.message);
      });
  };

  return (
    <nav className='navbar'>
      <div>
        <img className='logo' src="\src\images\Logo.jpg" alt="" />
      </div>
      <div className='navbar-routes'>
        <ul>
          <li><a href="/" className="list-group-item list-group-item-action">Home</a></li>
          <li><a href="/About" className="list-group-item list-group-item-action">About</a></li>
          <li><a href="/MakeYourOwn" className="list-group-item list-group-item-action">Make Your Own Event</a></li>
        </ul>
      </div>
      {
        currentUser ?
          <div>
            Welcome, {currentUser.displayName}! You are Logged in!
            <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
          </div>
          : (
            <div>
              <Link to="/register">REGISTER</Link>
              <br />
              <Link to="/login">LOGIN</Link>
            </div>
          )
      }
    </nav>
  );
};

export default Navbar;
