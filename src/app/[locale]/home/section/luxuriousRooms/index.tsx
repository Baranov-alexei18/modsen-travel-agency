'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { FacilityCard } from '@/components/cards/FacilityCard';
import { LuxRoomCard } from '@/components/cards/LuxRoomCard';
import { FACILITIES, LUX_ROOMS } from '@/constants';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

export const SectionLuxuriousRooms = () => {
  const [categories, setCategories] = useState([]);
  const locale = useLocale();
  const t = useTranslations('pages.home.facilities');

  return (
    <section className={styles.wrapper}>
      <div className={styles.backgroundImage}>
        <Image src="/png/hotelRoomsBg.png" alt="Luxurious Rooms Background" layout="fill" objectFit="cover" />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Luxurious Rooms</h1>
        <p className={styles.subtitle}>All rooms are designed for your comfort</p>
        <div className={styles.rooms}>
          {LUX_ROOMS.map((
            { src, desc, count }
          ) => <LuxRoomCard key={src} src={src} count={count} description={desc} />)}
        </div>
      </div>
    </section>
  );
};

export default withVisibilityObserver(SectionLuxuriousRooms);
