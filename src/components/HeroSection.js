import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {Link} from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="/colegiul_national_Decebal_h1.jpg"/>
      <h2>COLEGIUL NATIONAL "DECEBAL" DEVA</h2>
      <p>Centru educational de excelenta si nucleu cultural emergent</p>
    </div>
  )
}

export default HeroSection;
