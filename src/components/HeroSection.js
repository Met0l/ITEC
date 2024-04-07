import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="/colegiul_national_Decebal_h1.jpg"/>
      <div className='hero-section'>
        <div className='hero-title'>COLEGIUL NATIONAL "DECEBAL" DEVA</div>
        <div className='hero-text'>
          <p>Centru educational de excelenta si nucleu cultural emergent</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
