import React from 'react';
import logo from '../assets/lemon2-removebg-preview.png';
import './Navbar.css';
// import Form from './Form';
// import Hero from './Hero';
import {BrowserRouter, Link} from 'react-router-dom';

function Navbar() {
  return (  
    <header className='navPage'>
      <nav>
        <img src={logo} alt='na u sabi' />
        <BrowserRouter>
          <ul>
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/ABOUT'>ABOUT</Link></li>
              <li><Link to='/RESERVATION'>RESERVATION</Link></li>
              <li><Link to='/ONLINE ORDER'>ONLINE ORDER</Link></li>
              <li><Link to='/LOGIN'>LOGIN</Link></li>
          </ul>
        </BrowserRouter>
      </nav>
    </header>
  )
}

export default Navbar;