import Image from 'next/image';

import styles from './styles.module.scss';

export const BannerRoom = () => (
  <section className={styles.wrapper}>
    <div className={styles.backgroundImage}>
      <Image src="/png/banner.png" alt="Luxurious Rooms Banner" layout="fill" />
      <div className={styles.overlay} />
    </div>
    <div className={styles.content}>
      <h1 className={styles.title}>Rooms and Suites</h1>
    </div>
  </section>
);
