import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import img from '../assets/lemon2-removebg-preview.png';
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className='footer'>
            <img src={img} alt='footer'/>
            <nav className='navigation'>
                <h3>Navigations</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>menu</li>
                    <li>Reservation</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </nav>
            <nav>
                <h3>Contact</h3>
                <address>
                American Girl Place Chicago, IL 6060, United States of America 
                </address>
                <input type='tel'value='+1(312) 746-4563' />
                <input type='email'/>
            </nav>
            <div>
                <h3>Social Media Links</h3>
                <FaTwitter/>
                <FaFacebook/>
                <FaPinterest/>
                <FaInstagram/>
                <FaYoutube/>
            </div>
        </div>
    </footer>
  )
}

export default Footer;