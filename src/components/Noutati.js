import React from 'react';
import '../App.css';
import Announcement from './Announcement';
import './Noutati.css';

function Noutati() {
  return (
    <div className="news-container">
      <Announcement
        imageSrc="../Orar_11.jpg"
        title="Orare sem 2"
        description="Orarele pe semestrul 2 al anului scolar 2023-2024 au fost postate."
      />
      <Announcement
        imageSrc="Orar_11.jpg"
        title="Competitie de arta"
        description="In data de 28 mai, in scoala noastra, se va organiza o competitie pentru elevii cu abilitati
        artistice in materie de pictura, desen, desen arhitectural. Tema va fi anuntata ulterior, iar inscrierile vor
        incepe din data de 20 aprilie pana in 20 mai."
      />

    </div>
  )
}

export default Noutati;
