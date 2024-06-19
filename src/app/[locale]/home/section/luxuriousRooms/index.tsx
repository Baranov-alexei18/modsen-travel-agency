'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { LuxRoomCard } from '@/components/cards/LuxRoomCard';
import { LUX_ROOMS } from '@/constants';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

export const SectionLuxuriousRooms = () => {
  const t = useTranslations('pages.home.luxRooms');

  return (
    <section className={styles.wrapper}>
      <div className={styles.backgroundImage}>
        <Image src="/png/hotelRoomsBg.png" alt="Luxurious Rooms Background" fill />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.subtitle}>{t('subtitle')}</p>
        <div className={styles.rooms}>
          {LUX_ROOMS.map((
            { src, desc, count },
          ) => <LuxRoomCard key={src} src={src} count={count} description={desc} />)}
        </div>
      </div>
    </section>
  );
};

export default withVisibilityObserver(SectionLuxuriousRooms);
