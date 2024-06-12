'use client';

import { useEffect, useState } from 'react';

import { RoomCard } from '@/components/cards/RoomCard';
import { JoinForm } from '@/components/Forms/JoinForm';
import { PostDataType } from '@/types/post';

import styles from '../styles.module.scss';

export default function Rooms() {
  return (
    <main className={styles.main}>
      <RoomCard
        src="/png/hotelRoomsBg.png"
        price="₦190,000"
        title="The Royal Room"
        subtitle="Available: Yes"
      />
    </main>
  );
}
