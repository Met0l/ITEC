import React from 'react';
import GalleryItem from './GalleryItem';
import './Gallery.css';

function Gallery() {
  const galleryData = [
    { src: '1.jpg', title: 'Echipele de robotica' },
    { src: '1.jpg', title: 'Programul EPAS' },
    { src: '1.jpg', title: 'LEO' },
    { src: '1.jpg', title: 'Ansamblul Folcloric' },
    { src: '1.jpg', title: 'Clubul de debate' },
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