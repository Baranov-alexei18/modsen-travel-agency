import Image from 'next/image';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

export const BannerRoom = () => {
  const t = useTranslations('pages.contact');

  return (

    <section className={styles.wrapper}>
      <div className={styles.backgroundImage}>
        <Image src="/png/banner.png" alt="Luxurious Rooms Banner" layout="fill" />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('title')}</h1>
      </div>
    </section>
  );
};
