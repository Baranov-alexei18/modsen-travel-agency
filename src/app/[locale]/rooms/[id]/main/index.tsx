import { useTranslations } from 'next-intl';

import { RoomGallery } from '@/components/RoomGallery';

import styles from './styles.module.scss';

export const MainSection = ({ title, price }: { title: string, price: string }) => {
  const t = useTranslations('pages.rooms');

  return (
    <section className={styles.wrapper}>
      <RoomGallery />
      <div className={styles.infoContainer}>
        <h1>{title}</h1>
        <p className={styles.price}>{price}</p>
        <div className={styles.review}>
          <span className={styles.stars}>★★★★★</span>
          <span className={styles.reviewCount}>5 Customer Review</span>
        </div>
        <p className={styles.description}>
          This cozy furnished room with fresh renovation consists of
          a separate entrance hall with mirror, a bedroom with a large
          double bed and closet, a kitchen combined with the living room.
          There is also  a shower cubicle and an area with sink and
          toilet cabinet. The windows are large so there is plenty of
          light in the apartment, but there are also curtains to block
          out unwanted light if needed. The area is very calm and quiet,
          in walking distance is everything you need: supermarket, bus stop,
          park, cinema, school, city hall.
        </p>
        <button className={styles.reservationButton}>{t('reservation')}</button>
      </div>
    </section>
  );
};
