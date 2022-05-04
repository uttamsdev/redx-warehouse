import React from 'react';
import image from '../../../images/about-bg.jpg';
import './About.css';
const About = () => {
  return (
    <div>

        <div className='div-container'>
            <div className='about'>
                <h2>ABOUT US</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About;