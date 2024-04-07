import React from 'react';
import GalleryItem from './GalleryItem';
import './Gallery.css';

function Gallery() {
  const galleryData = [
    { src: 'image1.jpg', title: 'Title 1' },
    { src: 'image2.jpg', title: 'Title 2' },
    { src: 'image3.jpg', title: 'Title 3' },
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