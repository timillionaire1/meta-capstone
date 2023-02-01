import React from 'react';
// import {Link } from 'react-router-dom';
import img from '../assets/waiter3.jpg';
import './Hero.css';
// import Form from './Form';


function Hero() {
  return (
    <main className='heroPage'>
      <div className='heroSection'>
        <div>
            <h1>Little Lemon</h1>
            <h4>Chicago</h4>
            <p>We are family-owned <br/> Mediterranean restaurant,<br/>
               focused on traditional recipes, <br/> served with modern twist </p>
            <div className='button'>
              <button>Reserve a Table</button>
            </div>
        </div>
        <img src={img} alt='restaurant'/>
      </div>
    </main>
  )
}

export default Hero