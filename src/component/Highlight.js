import React from 'react'
import './Highlight.css';
import img_1 from '../assets/greek salad.jpg';
import img_2 from '../assets/bruhetta.jpg';
import img_3 from '../assets/lemon dessert.jpg';

function Highlight() {
  return (
    <main className='highPage'>
        <div className='highLight'>
            <div className='row_one'>
                <h1>This Week Specials</h1>
                <button>Online Menu</button>
            </div>
            <div className='row_two'>
                <div className='col'>
                  <img src={img_1} alt='first' />
                  <div>
                    <div id='title'>
                      <h4>Greek Salad</h4>
                      <p>$12.00</p>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese,
                      garnished with crunchy garlic and rosemary croutons </p>
                    <h5>Order a delivery *</h5>
                  </div>
                </div>
                <div className='col'>
                  <img src={img_2} alt='second' />
                  <div>
                    <div id='title'>
                      <h4>Bruchetta</h4>
                      <p>$12.00</p>
                    </div>
                    <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned 
                      with salt and olive oil</p>
                    <h5>Order a delivery *</h5>
                  </div>
                </div>
                <div className='col'>
                  <img src={img_3} alt='second' />
                  <div>
                    <div id='title'>
                      <h4>Lemon Dessert</h4>
                      <p>$12.00</p>
                    </div>
                    <p>This comes straight from grandma's recipe book, every last ingredient has been sourced
                      and is as authentic as can be imagined</p>
                    <h5>Order a delivery *</h5>
                  </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Highlight;