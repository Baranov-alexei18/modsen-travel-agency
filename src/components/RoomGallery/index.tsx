'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';

const images = [
  '/png/banner.png',
  '/png/luxRoom1.png',
  '/png/luxRoom2.png',
  '/png/luxRoom3.png',
  '/png/homeWithPool.png',
];

export const RoomGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.thumbnail} ${selectedImage === image ? styles.selected : ''}`}
            onClick={() => setSelectedImage(image)}
            aria-hidden
          >
            <Image src={image} alt={`Thumbnail ${index + 1}`} width={80} height={80} objectFit="cover" />
          </div>
        ))}
      </div>
      <div className={styles.mainImage}>
        <Image src={selectedImage} alt="Selected" layout="responsive" width={800} height={600} objectFit="cover" />
      </div>
    </div>
  );
};
