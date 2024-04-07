import React from 'react';
import '../App.css';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact </h3>
          <p>Email: decebal@cnd.ro</p>
          <p>Nr telefon: +40 254 212 758</p>
          <p>Fax: +40 254 213 457</p>
        </div>
        <div className="footer-section">
          <h3>Locatie</h3>
          <p>Str. 1 Decembrie 1918, Nr. 22</p>
          <p>Deva, Hunedoara, Romania</p>
          <p>ZIP: 330025</p>
        </div>
        <div className="footer-section">
          <h3>Parteneri</h3>
          <p>Farmacia Remedia</p>
          {/* <img src="/remedia-logo.png"/> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Colegiul National "Decebal". All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;