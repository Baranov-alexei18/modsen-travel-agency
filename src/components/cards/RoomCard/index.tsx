import React from 'react';
import Image from 'next/image';

import { ButtonApp } from '@/components/ui-components/button';
import { buttonStyled1 } from '@/components/ui-components/button/options';

import { RoomCardType } from './types';

import styles from './styles.module.scss';

export const RoomCard = ({
  src, price, title, available, handleClickCard,
}: RoomCardType) => (
  <div className={styles.card}>
    <div className={styles.imageContainer}>
      <Image src={src} alt={`room-image-src-${src}`} layout="fill" />
    </div>
    <div className={styles.description}>
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{`Available: ${available ? 'Yes' : 'No'}`}</span>
      </div>
      <p className={styles.price}>{price}</p>
    </div>
    <div className={styles.footer}>
      <div className={styles.advantages}>
        <Image src="/svg/tv.svg" alt="tv" width={20} height={20} />
        <Image src="/svg/shower.svg" alt="shower" width={20} height={20} />
        <Image src="/svg/wifi.svg" alt="wifi" width={20} height={20} />
      </div>
      <ButtonApp style={buttonStyled1} onClick={handleClickCard}>Book Now</ButtonApp>
    </div>
  </div>
);
