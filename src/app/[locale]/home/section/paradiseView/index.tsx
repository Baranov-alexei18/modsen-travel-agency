'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { BookingForm } from '@/components/Forms/BookingForm';
import { ButtonApp } from '@/components/ui-components/button';
import { buttonStyled2 } from '@/components/ui-components/button/options';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

export const SectionParadise = () => {
  const [authors, serAuthors] = useState([]);
  const locale = useLocale();
  const t = useTranslations('pages.home.authors');

  return (
    <section className={styles.wrapper}>
      <div className={styles.description}>
        <h3>Paradise View</h3>
        <h1>
          Hotel for every
          moment rich in
          emotion
        </h1>
        <p>
          Every moment feels like the first time
          in paradise view
        </p>
        <div className={styles.moveTour}>
          <ButtonApp style={buttonStyled2}>
            <Image src="/svg/triangle.svg" alt="Move" width={18} height={13} />
          </ButtonApp>
          Take a tour
        </div>
      </div>
      <div className={styles.image}>
        <Image src="/png/homeWithPool.png" alt="home with poll" fill />
      </div>
      <div className={styles.formWrapper}>
        <BookingForm />
      </div>
    </section>
  );
};

export default withVisibilityObserver(SectionParadise);
