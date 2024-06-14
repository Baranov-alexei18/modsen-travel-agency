import Image from 'next/image';

import styles from './styles.module.scss';

const images = [
  '/png/decor1.png',
  '/png/decor2.png',
  '/png/decor3.png',
];

export const PhotoZoneSection = () => (
  <section className={styles.wrapper}>
    <div className={styles.galleryContainer}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageWrapper}>
          <Image src={image} alt={`Gallery image ${index + 1}`} layout="responsive" width={400} height={500} />
        </div>
      ))}
    </div>
  </section>
);
