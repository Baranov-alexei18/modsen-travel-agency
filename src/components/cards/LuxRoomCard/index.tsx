import React from 'react';
import Image from 'next/image';

import { RoomCardType } from './types';

import styles from './styles.module.scss';

export const LuxRoomCard = ({ src, count, description }: RoomCardType) => (
  <div className={styles.card}>
    <div className={styles.imageContainer}>
      <Image src={src} alt={`room-image-src-${src}`} layout="fill" />
      <div className={styles.availability}>
        {`${count} Rooms available`}
      </div>
    </div>
    <p className={styles.description}>{description}</p>
  </div>
);
