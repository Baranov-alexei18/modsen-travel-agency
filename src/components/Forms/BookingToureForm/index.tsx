'use client';

import React from 'react';
import {
  useQuery,
} from '@apollo/client';
import { useFormik } from 'formik';
import { useTranslations } from 'next-intl';

import { client, LIST_COUNTRIES } from '@/api/countries';
import { ButtonApp } from '@/components/ui-components/button';
import { buttonStyled3 } from '@/components/ui-components/button/options';
import { InputApp } from '@/components/ui-components/input';

import { validationSchema } from './options';

import styles from './styles.module.scss';

export const BookingToureForm = ({
  country, closeModal,
}: {
  country: string,
  closeModal: () => void;
}) => {
  const t = useTranslations('forms.booking');

  const {
    handleSubmit, handleChange, handleBlur, values, touched, errors,
  } = useFormik({
    initialValues: {
      fullName: '',
      phone: '',
      email: '',
    },
    validationSchema,
    onSubmit: async (values: {
      fullName: string,
      phone: string,
      email: string,
    }, { resetForm }: { resetForm: () => void }) => {
      alert(`Сообщение с данными ${JSON.stringify(values)} отправлено. В ближайшее время с вами свяжутся!`);
      closeModal();
      resetForm();
    },
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>{t('titleForm', { country })}</h1>
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
        cyId="contact-form-phone"
        type="phone"
        name="phone"
        placeholder={t('phone')}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.phone}
        error={errors.phone}
        isTouch={Boolean(touched.phone)}
      />
      <InputApp
        cyId="contact-form-email"
        type="email"
        name="email"
        placeholder={t('email')}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        error={errors.email}
        isTouch={Boolean(touched.email)}
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
