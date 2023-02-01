import React from 'react';
import './About.css';
import imgFirst from '../assets/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg';
import imgSecond from '../assets/meta3.png';

function About() {
  return (
    <div className='aboutPage'>
      <div className='about'>
        <div>
            <h2>Little Lemon</h2>
            <h4>Chicago</h4>
            <p>
                Little Lemon is a restaurant where meals, cock-tail, barbecue are ordered
                 at client's convenience. This company shares a partnership with 
                 Meta software company with a means to embrace online service and to also
                  get customer's desired varieties to their destinations.
            </p>
        </div>
        <div>
            <img src={imgFirst} alt='first' />
            <img src={imgSecond} alt='second' />
        </div>
      </div>
    </div>
  )
}

export default About