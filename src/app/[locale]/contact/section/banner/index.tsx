import Image from 'next/image';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

export const BannerContact = () => {
  const t = useTranslations('pages.contact');

  return (
    <section className={styles.wrapper}>
      <div className={styles.backgroundImage}>
        <Image src="/png/banner.png" alt="Luxurious Rooms Banner" fill />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('title')}</h1>
        <h4 className={styles.subtitle}>
          {t('subtitle')}
        </h4>
      </div>
    </section>
  );
};
