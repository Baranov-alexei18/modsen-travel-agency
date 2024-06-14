import React from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import { RoomCard } from '@/components/cards/RoomCard';
import { LINK_ROOM } from '@/constants/links';

import styles from './styles.module.scss';

const ROOMS_HOTELS = [
  {
    id: 1,
    src: '/png/hotelRoomsBg.png',
    price: '₦190,000',
    title: 'The Royal Room',
    available: true,
  },
  {
    id: 2,
    src: '/png/hotelRoomsBg.png',
    price: '₦110,000',
    title: 'The Service Room',
    available: false,
  },
  {
    id: 3,
    src: '/png/hotelRoomsBg.png',
    price: '₦1900,000',
    title: 'The Royal-Lux Room',
    available: true,
  },
  {
    id: 4,
    src: '/png/hotelRoomsBg.png',
    price: '₦3000,000',
    title: 'The President Room',
    available: false,
  },
  {
    id: 5,
    src: '/png/hotelRoomsBg.png',
    price: '₦10',
    title: 'The Common Room',
    available: true,
  },
  {
    id: 6,
    src: '/png/hotelRoomsBg.png',
    price: '₦180,000',
    title: 'The Royal Room 2',
    available: true,
  },
  {
    id: 7,
    src: '/png/hotelRoomsBg.png',
    price: '₦550,000',
    title: 'The Gold Room',
    available: false,
  },
  {
    id: 8,
    src: '/png/hotelRoomsBg.png',
    price: '₦190,000',
    title: 'The Bronze Room',
    available: true,
  },
];

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
