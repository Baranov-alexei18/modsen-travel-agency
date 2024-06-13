'use client';

import React from 'react';
import {
  useQuery,
} from '@apollo/client';
import { useFormik } from 'formik';
import { useTranslations } from 'next-intl';

import { client, LIST_COUNTRIES } from '@/api/contries';
import { ButtonApp } from '@/components/ui-components/button';
import { buttonStyled3 } from '@/components/ui-components/button/options';
import { InputApp } from '@/components/ui-components/input';
import { SelectApp } from '@/components/ui-components/select';

import { validationSchema } from './options';
import { CheckBookingFormType } from './types';

import styles from './styles.module.scss';

export const CheckBookingForm = ({
  country, countUser, typeRoom, checkIn, checkOut, closeModal,
}: CheckBookingFormType) => {
  const t = useTranslations('forms.booking');
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  const {
    handleSubmit, handleChange, handleBlur, values, touched, errors,
  } = useFormik({
    initialValues: {
      phone: '',
      fullName: '',
      country: country || '',
      countUser: countUser.toString() || '',
      typeRoom: typeRoom || '',
      checkIn: checkIn || '',
      checkOut: checkOut || '',
    },
    validationSchema,
    onSubmit: async (values: {
      phone: string,
      fullName: string,
      country: string,
      countUser: string,
      typeRoom: string,
      checkIn: string,
      checkOut: string,
    }, { resetForm }: { resetForm: () => void }) => {
      alert(`Сообщение с данными ${JSON.stringify(values)} отправлено. В ближайшее время с вами свяжутся!`);
      closeModal();
      resetForm();
    },
  });

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputApp
        cyId="contact-form-name"
        type="text"
        name="fullName"
        placeholder={t('name')}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.fullName}
        error={errors.fullName}
        isTouch={Boolean(touched.fullName)}
      />
      <InputApp
        cyId="contact-form-email"
        type="phone"
        name="phone"
        placeholder={t('phone')}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.phone}
        error={errors.phone}
        isTouch={Boolean(touched.phone)}
      />
      <SelectApp
        data-testid="contact-form-country"
        name="country"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.country && country}
      >
        {data.countries.map(({ code, name }: { code: string; name: string; }) => (
          <option key={code} value={name}>
            {name}
          </option>
        ))}
      </SelectApp>
      <SelectApp
        data-testid="contact-form-countUser"
        name="countUser"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.countUser ? values.countUser : countUser.toString()}
      >
        <option value={1}>01</option>
        <option value={2}>02</option>
        <option value={3}>03</option>
        <option value={4}>04</option>
        <option value={5}>05</option>
        <option value={6}>06</option>
        <option value={7}>07</option>
      </SelectApp>
      <SelectApp
        data-testid="contact-form-typeRoom"
        name="typeRoom"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.typeRoom ? values.typeRoom : typeRoom}
      >
        <option value="Standard">Standard</option>
        <option value="Roal">Roal</option>
      </SelectApp>
      <InputApp
        cyId="contact-form-checkIn"
        type="date"
        name="checkIn"
        placeholder={t('checkIn')}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.checkIn ? values.checkIn : checkIn}
        error={errors.checkIn}
        isTouch={Boolean(touched.checkIn)}
      />
      <InputApp
        cyId="contact-form-checkOut"
        type="date"
        name="checkOut"
        placeholder={t('checkOut')}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.checkOut ? values.checkOut : checkOut}
        error={errors.checkOut}
        isTouch={Boolean(touched.checkOut)}
      />
      <ButtonApp
        cyId="contact-form-submit"
        type="submit"
        style={buttonStyled3}
        onClick={handleSubmit}
      >
        {t('bookNow')}
      </ButtonApp>
    </form>
  );
};
