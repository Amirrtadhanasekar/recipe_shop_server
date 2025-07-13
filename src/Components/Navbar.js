/*import React from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';
import logos from '../Assests/logos.png'; 

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left-section'>
        <img src={logos} alt="LULU Logo" className="logo-img" />
        <div className='nav-title'>LULU Pastry Shop 🍰!</div>
      </div>
      <ul className='nav-items'>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </ul>
    </div>
  );
};

export default Navbar;*/
import React from 'react';
import './css/Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import logos from '../Assests/logos.png';
const Navbar = () => {
  const location = useLocation();
  const hideMenu = location.pathname === '/'||location.pathname === '/Login';
  return (
    <div className='navbar'>
      <div className='left-section'>
        <img src={logos} alt="LULU Logo" className="logo-img" />
        <div className='nav-title'>LULU's Pastry Shop 🍰!</div>
      </div>

      {!hideMenu && (
        <ul className='nav-items'>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/RecipenIndexPage">Filter</Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
