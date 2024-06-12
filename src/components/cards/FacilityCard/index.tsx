import React from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';

export const FacilityCard = ({ src, title }: { src: string; title:string}) => (
  <div className={styles.card}>
    <div className={styles.imageContainer}>
      <Image src={src} alt={title} layout="fill" objectFit="contain" />
    </div>
    <div className={styles.title}>{title}</div>
  </div>
);
