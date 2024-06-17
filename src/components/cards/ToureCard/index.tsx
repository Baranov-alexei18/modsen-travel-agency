import React from 'react';
import Image from 'next/image';

import { ButtonApp } from '@/components/ui-components/button';
import { buttonStyled5 } from '@/components/ui-components/button/options';

import { ToureCardType } from './types';

import styles from './styles.module.scss';

export const ToureCard = ({
  code, currency, country, lang, handleClickCard,
}: Partial<ToureCardType>) => (
  <div className={styles.card}>
    <div className={styles.header}>{`Currency - ${currency}`}</div>
    <div className={styles.imageContainer}>
      <Image src={`https://flagsapi.com/${code}/flat/64.png`} alt={`flag-${code}`} fill />
    </div>
    <div className={styles.description}>
      {country}
    </div>
    <div className={styles.footer}>
      <span>{lang}</span>
      <ButtonApp style={buttonStyled5} onClick={handleClickCard}>More</ButtonApp>
    </div>
  </div>
);
