'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ButtonApp } from '@/components/ui-components/button';
import { buttonStyled5 } from '@/components/ui-components/button/options';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

export const SectionParadise = () => {
  const t = useTranslations('pages.toure');

  return (
    <section className={styles.wrapper}>
      <div className={styles.description}>
        <h3>{t('paradise')}</h3>
        <h1>{t('title')}</h1>
        <p>{t('subtitle')}</p>
        <div className={styles.moveTour}>
          <ButtonApp style={buttonStyled5}>
            {t('bookNow')}
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
