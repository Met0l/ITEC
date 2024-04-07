import React from 'react';
import GalleryItem from './GalleryItem';
import './Gallery.css';

function Gallery() {
  const galleryData = [
    { src: '1.jpg', title: 'Echipe robotica' },
    { src: '2.jpg', title: 'Programul EPAS' },
    { src: '3.jpg', title: 'ERASMUS+' },
  ];

  return (
    <div className="gallery">
      {galleryData.map((item, index) => (
        <GalleryItem key={index} src={item.src} title={item.title} />
      ))}
    </div>
  );
}

export default Gallery;