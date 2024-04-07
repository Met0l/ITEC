import React from 'react';
import '../App.css';
import './GalleryItem.css';

function GalleryItem({ src, title }) {
    return (
      <div className="gallery-item">
        <img src={src} alt={title} />
        <h3>{title}</h3>
      </div>
    );
}
  
export default GalleryItem;