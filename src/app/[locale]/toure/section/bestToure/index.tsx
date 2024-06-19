'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

export const SectionBestToure = () => {
  const t = useTranslations('pages.toure');

  return (
    <section className={styles.wrapper}>
      <div className={styles.backgroundImage}>
        <Image src="/png/hotelRoomsBg.png" alt="Luxurious Rooms Background" fill />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('bestToure')}</h1>
      </div>
    </section>
  );
};

export default withVisibilityObserver(SectionBestToure);
