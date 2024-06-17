'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

import { ButtonApp } from '@/components/ui-components/button';
import { buttonStyled1, buttonStyled5 } from '@/components/ui-components/button/options';
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
          Cross-country
          tour
        </h1>
        <p>
          Every moment feels like the first time
          in paradise view
        </p>
        <div className={styles.moveTour}>
          <ButtonApp style={buttonStyled5}>
            Book now
          </ButtonApp>
        </div>
      </div>
      <div className={styles.image}>
        <Image src="/png/homeWithPool.png" alt="home with poll" fill />
      </div>
    </section>
  );
};

export default withVisibilityObserver(SectionParadise);
