import React from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import { RoomCard } from '@/components/cards/RoomCard';
import { LINK_ROOM } from '@/constants/links';
import { ROOMS_HOTELS } from '@/constants/mock';

import styles from './styles.module.scss';

export const ViewRoom = React.forwardRef<HTMLDivElement>((props, ref) => {
  const locale = useLocale();
  const router = useRouter();

  const handleClickCard = (id: number) => {
    router.push(`/${locale}/${LINK_ROOM}/${id}`);
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      {ROOMS_HOTELS.map(({
        id, src, price, title, available,
      }) => (
        <RoomCard
          key={id}
          src={src}
          price={price}
          title={title}
          available={available}
          handleClickCard={handleClickCard.bind(this, id)}
        />
      ))}
    </div>
  );
});
