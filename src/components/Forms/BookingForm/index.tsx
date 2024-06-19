'use client';

import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

import { client, LIST_COUNTRIES } from '@/api/countries';
import { ButtonApp } from '@/components/ui-components/button';
import { buttonStyled3 } from '@/components/ui-components/button/options';
import { BaseModal } from '@/components/ui-components/modal';
import { MAX_PERSON } from '@/constants';

import { CheckBookingForm } from '../CheckBookingForm';

import styles from './styles.module.scss';

export const BookingForm = () => {
  const locale = useLocale();
  const t = useTranslations('forms.booking');
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  const [country, setCountry] = useState('Andorra');
  const [roomType, setRoomType] = useState('Standart');
  const [countUser, setCountUser] = useState(1);
  const [dateCheckIn, setDateCheckIn] = useState<null | string>(null);
  const [dateCheckOut, setDateCheckOut] = useState<null | string>(null);
  const [openModal, setOpenModal] = useState(false);

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }
  const handleBookingRoom = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className={styles.bookingForm}>
        <div className={styles.field}>
          <label htmlFor="location">
            <Image src="/svg/location.svg" alt="Location" width={20} height={20} />
            {t('location')}
          </label>
          <select id="location" value={country} onChange={(event) => setCountry(event.target.value)}>
            {data.countries.map(({ code, name }: { code: string; name: string; }) => (
              <option key={code} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="roomType">
            <Image src="/svg/building.svg" alt="building" width={20} height={20} />
            {t('roomType')}
          </label>
          <select id="roomType" value={roomType} onChange={(event) => setRoomType(event.target.value)}>
            <option value="Standard">Standard</option>
            <option value="Roal">Roal</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="person">
            <Image src="/svg/user.svg" alt="user" width={20} height={20} />
            {t('person')}
          </label>
          <select id="person" value={countUser} onChange={(event) => setCountUser(parseInt(event.target.value, 10))}>
            {Array.from({ length: MAX_PERSON }).map((_, index) => (
              <option key={index} value={index + 1}>{`0${index + 1}`}</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="checkIn">
            <Image src="/svg/calendar.svg" alt="calendar" width={20} height={20} />
            {t('checkIn')}
          </label>
          <input type="date" id="checkIn" value={dateCheckIn!} onChange={(event) => setDateCheckIn(event.target.value)} />
        </div>
        <div className={styles.field}>
          <label htmlFor="checkOut">
            <Image src="/svg/calendar.svg" alt="calendar" width={20} height={20} />
            {t('checkOut')}
          </label>
          <input type="date" id="checkOut" value={dateCheckOut!} onChange={(event) => setDateCheckOut(event.target.value)} />
        </div>
        <div className={styles.field}>
          <ButtonApp style={buttonStyled3} onClick={handleBookingRoom}>{t('bookNow')}</ButtonApp>
        </div>
      </div>
      {openModal && (
        <BaseModal isOpen={openModal} onClose={handleCloseModal}>
          <CheckBookingForm
            country={country}
            countUser={countUser}
            typeRoom={roomType}
            checkIn={dateCheckIn!}
            checkOut={dateCheckOut!}
            closeModal={handleCloseModal}
          />
        </BaseModal>
      )}
    </>
  );
};
