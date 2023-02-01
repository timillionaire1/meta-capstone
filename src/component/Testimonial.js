import React from 'react';
import {FaStar} from 'react-icons/fa'
import './Testimonial.css';
import img from '../assets/25-259307_afro-girl-png-black-girl-png.png'

function Testimonial() {
  return (
    <div className='testPage'>
        <div className='testimonials'>
            <h2>What our customer say?</h2>
            <div className='testimonial'>
                <div className='column'>
                    <div>
                        <FaStar style={{color:'yellow'}}/>
                        <FaStar style={{color:'yellow'}}/>
                        <FaStar style={{color:'yellow'}}/>
                        <FaStar style={{color:'yellow'}}/>
                        <FaStar style={{color:'yellow'}}/>
                    </div>
                    <div>
                        <img src={img} alt='first' />
                        <div>Georginia <br/>Right</div>
                    </div>
                    <p>Wow! A placed an online order... I was not only 
                        notified but prompted and served at the right time, at door-step
                    </p>
                </div>
                <div className='column'>
                    <div>
                        <FaStar style={{color:'yellow'}}/>
                        <FaStar style={{color:'yellow'}}/>
                        <FaStar style={{color:'yellow'}}/>
                        <FaStar style={{color:'yellow'}}/>
                        <FaStar style={{color:'yellow'}}/>
                    </div>
                    <div>
                        <img src={img} alt='second' />
                        <div>Georginia <br/>Right</div>
                    </div>
                    <p>Excellent eating experience! The waitress was 
                        very patient not considering how harsh I was.
                     </p>
                </div>
                <div className='column'>
                    <div>
                        <FaStar style={{color:'yellow'}}/>
                        <FaStar style={{color:'yellow'}}/>
                        <FaStar style={{color:'yellow'}}/>
                        <FaStar style={{color:'yellow'}}/>
                        <FaStar style={{color:'yellow'}}/>
                    </div>
                    <div>
                        <img src={img} alt='three' />
                        <div>Georginia <br/>Right</div>
                    </div>
                    <p>My family and I can't get over the great moment, 
                        eating the recipes we have craved for a long time.
                    </p>
                </div>
                <div className='column'>
                    <div>
                        <FaStar style={{color:'yellow'}}/>
                        <FaStar style={{color:'yellow'}}/>
                        <FaStar style={{color:'yellow'}}/>
                        <FaStar style={{color:'yellow'}}/>
                        <FaStar style={{color:'yellow'}}/>
                    </div>
                    <div>
                        <img src={img} alt='four' />
                        <div>Georginia <br/>Right</div>
                    </div>
                    <p>The hor d'oeuvres caught my attention. A wonderful service 
                        with a meal of my desired choice at the stipulated time.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial