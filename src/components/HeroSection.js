import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/Space Travel - 5.mp4' autoPlay loop muted />
      <h1>DESTINY AWAITS</h1>
      <p>Waiting for the right time?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Interested  
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          disabled
        >
          Reach US<i class="fab fa-youtube"></i>
        </Button> 
      </div>
    </div>
  );
}

export default HeroSection;
