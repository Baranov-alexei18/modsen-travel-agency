'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { FacilityCard } from '@/components/cards/FacilityCard';
import { LuxRoomCard } from '@/components/cards/LuxRoomCard';
import { ButtonApp } from '@/components/ui-components/button';
import { FACILITIES, LUX_ROOMS } from '@/constants';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

export const BannerRooms = ({ handleScroll }: { handleScroll: () => void }) => {
  const [categories, setCategories] = useState([]);
  const locale = useLocale();
  const t = useTranslations('pages.home.facilities');

  return (
    <section className={styles.wrapper}>
      <div className={styles.backgroundImage}>
        <Image src="/png/banner.png" alt="Luxurious Rooms Banner" layout="fill" />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Rooms and Suites</h1>
        <h4 className={styles.subtitle}>
          The elegant luxury bedrooms
          in this gallery showcase custom interior
          designs & decorating ideas. View pictures and find your
          perfect luxury bedroom design.
        </h4>
        <button className={styles.btnDown} onClick={handleScroll}>
          <Image src="/svg/arrow-down.svg" alt="Luxurious Rooms Banner" layout="fill" />
        </button>
      </div>
    </section>
  );
};

export default withVisibilityObserver(BannerRooms);
