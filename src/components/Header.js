import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(''); 
    localStorage.removeItem('username'); 
    window.location.href = '/';
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/my-orders">My Orders</Link></li>
          {user ? (
            <li>
              <span>Welcome, {user}!</span>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
