import React from 'react';
import '../App.css';
import './Oferta.css';

function Oferta() {
  return (
    <div className="offer-container">
      <div className='offer'>
        <h1 className='offer-header'>Invatamant prescolar (3-6 ani)</h1>
        <ul className='offer-list'>
          <li className='offer-item'>
            2 grupe cu predare in limba germana
          </li>
        </ul>
      </div>
      <div className='offer'>
        <h1 className='offer-header'>Invatamant primar (7-10 ani)</h1>
        <ul className='offer-list'>
          <li className='offer-item'>
            2 clase cu predare in limba germana
          </li>
        </ul>
      </div>
      <div className='offer'>
        <h1 className='offer-header'>Invatamant gimnazial (11-14 ani)</h1>
        <ul className='offer-list'>
          <li className='offer-item'>
            2 clase cu predare in limba romana
          </li>
          <li className='offer-item'>
            2 clase cu predare in limba germana
          </li>
        </ul>
      </div>
      <div className='offer'>
        <h1 className='offer-header'>Invatamant liceal (15-18 ani)</h1>
        <ul className='offer-list'>
          <li className='offer-item'>
            1 clasa de matematica informatica bilingv engleza
          </li>
          <li className='offer-item'>
            1 clasa de matematica informatica intensiv informatica
          </li>
          <li className='offer-item'>
            1 clasa de stiinte ale naturii bilingv engleza
          </li>
          <li className='offer-item'>
            1 clasa de stiinte ale naturii bilingv germana
          </li>
          <li className='offer-item'>
            1 clasa de stiinte ale naturii cu predare in limba germana
          </li>
          <li className='offer-item'>
            1 clasa de filologie bilingv engleza
          </li>
          <li className='offer-item'>
            1 clasa de filologie bilingv franceza
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Oferta;
