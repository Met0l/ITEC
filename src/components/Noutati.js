import React from 'react';
import '../App.css';
import Announcement from './Announcement';
import './Noutati.css';

function Noutati() {
  return (
    <div className="news-container">
      
      <Announcement
        imageSrc="../public/Orar_11.jpeg"
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
      <Announcement
        imageSrc="../public/Orar_11.jpeg"
        title="Campionatul de fotbal dintre clase"
        description="In acest an are loc o noua editie a Campionatului de fotbal dintre clasele atat de gimnaziu,
        cat si de liceu. Clasa castigatoare va primi un premiu special din partea Consiliului Scolar."
      />
      <Announcement
        imageSrc="../public/Orar_11.jpeg"
        title="ERASMUS+ Mobilitate Braganca Protugalia"
        description="Elevii din clasele a 11-a si a 12-a inscrisi in programul ERASMUS+ care au completat formularul
        de inscriere si au sustinut proba deverificare a limbii spaniole necesara mobilitatii din Portugalia vor fi 
        anuntati intr-un email daca rezultatele obtinute sunt suficiente pentru a participa la mobilitate. O lista 
        concreta va fi postata in data de 25 aprilie."
      />

    </div>
  )
}

export default Noutati;
