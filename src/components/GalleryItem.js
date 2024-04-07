import React from 'react';
import '../App.css';
import './GalleryItem.css';

function GalleryItem({ src, title }) {
    return (
      <div className="gallery-item">
        <div className='gallery-image'>
          <img src={src} alt={title} />
        </div>
        <div className='gallery-text'>
          <h3>{title}</h3>
        </div>
      </div>
    );
}
  
export default GalleryItem;