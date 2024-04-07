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
            20 locuri - gradinita cu program prelungit, predare in limba germana
          </li>
          <li className='offer-item'>
            20 locuri - gradinita cu program normal, predare in limba germana
          </li>
        </ul>
      </div>
      <div className='offer'>
        <h1 className='offer-header'>Invatamant primar (7-10 ani)</h1>
        <ul className='offer-list'>
          <li className='offer-item'>
            50 locuri - clasa pregatitoare pentru scoala (clasa 0), predare in limba germana
          </li>
        </ul>
      </div>
      <div className='offer'>
        <h1 className='offer-header'>Invatamant gimnazial (11-14 ani)</h1>
        <ul className='offer-list'>
          <li className='offer-item'>
            58 locuri - clasa a 5-a cu predare intensiva in limba engleza
          </li>
          <li className='offer-item'>
           58 locuri - clasa a 5-a cu predare in limba germana
          </li>
        </ul>
      </div>
      <div className='offer'>
        <h1 className='offer-header'>Invatamant liceal (15-18 ani)</h1>
        <ul className='offer-list'>
          <li className='offer-item'>
            26 locuri - matematica informatica bilingv engleza
          </li>
          <li className='offer-item'>
            26 locuri - matematica informatica intensiv informatica
          </li>
          <li className='offer-item'>
            26 locuri - stiinte ale naturii bilingv engleza
          </li>
          <li className='offer-item'>
            13 locuri - stiinte ale naturii bilingv germana
          </li>
          <li className='offer-item'>
            13 locuri - stiinte ale naturii bilingv franceza
          </li>
          <li className='offer-item'>
            13 locuri - filologie bilingv engleza
          </li>
          <li className='offer-item'>
            13 locuri - filologie bilingv franceza
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Oferta;
