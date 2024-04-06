import React from 'react';
import '../App.css';
import { Button } from '.Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="/colegiul_national_Decebal_h1.jpg"/>
      <h2>COLEGIUL NATIONAL "DECEBAL" DEVA</h2>
      <p>Centru educational de excelenta si nucleu cultural emergent</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large"> Oferta educationala </Button>
      </div>
    </div>
  )
}

export default HeroSection
