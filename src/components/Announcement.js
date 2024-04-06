import React from 'react';
import '../App.css';
import './Announcement.css';

function Announcement({ imageSrc, title, description }) {
  return (
    <div className="announcement">
      <img src={imageSrc} alt={title} className="announcement-image" />
      <div className="announcement-content">
        <h2 className="announcement-title">{title}</h2>
        <p className="announcement-description">{description}</p>
      </div>
    </div>
  );
}

export default Announcement;