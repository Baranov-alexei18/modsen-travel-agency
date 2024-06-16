'use client';

import { useCallback, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { useTranslations } from 'next-intl';

import { ButtonApp } from '@/components/ui-components/button';
import { buttonStyled4 } from '@/components/ui-components/button/options';
import { InputApp } from '@/components/ui-components/input';
import { Toast } from '@/components/ui-components/toast';

import { initialValues, validationSchema } from './options';

import styles from './styles.module.scss';

export const ContactForm = () => {
  const [toast, setToast] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

  const t = useTranslations('forms.contact');

  const {
    handleSubmit, handleChange, handleBlur, values, touched, errors,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values: {
      email: string,
      fullName: string,
      message: string,
    }, { resetForm }: { resetForm: () => void }) => {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_QUESTION!,
          {
            from_email: values.email,
            name: values.fullName,
            message: values.message,
          },
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_KEY!,
          },
        )
        .then(
          () => {
            resetForm();
            setToast({ message: t('successMessage'), type: 'success' });
          },
          (error) => {
            setToast({ message: t('errorMessage'), type: 'error' });
          },
        );
    },
  });

  const closeToast = useCallback(() => {
    setToast(null);
  }, []);

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.info}>
          <div className={styles.labelContainer}>
            <label htmlFor="contact-form-name">{t('name')}</label>
            <InputApp
              cyId="contact-form-name"
              type="text"
              name="fullName"
              placeholder="e.g John Becker"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullName}
              error={errors.fullName}
              isTouch={Boolean(touched.fullName)}
            />
          </div>
          <div className={styles.labelContainer}>
            <label htmlFor="contact-form-email">{t('email')}</label>
            <InputApp
              cyId="contact-form-email"
              type="email"
              name="email"
              placeholder="johnbecker@gmail.com"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email}
              isTouch={Boolean(touched.email)}
            />
          </div>
        </div>
        <div className={styles.labelContainer}>
          <label htmlFor="contact-form-message">{t('message')}</label>
          <textarea
            id="contact-form-message"
            data-testid="contact-form-message"
            name="message"
            placeholder={t('message')}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          {touched.message && errors.message ? (
            <span className={styles.error}>{`${errors.message}`}</span>
          ) : null}
        </div>
        <ButtonApp
          cyId="contact-form-submit"
          type="submit"
          style={buttonStyled4}
        >
          {t('btnTitle')}
        </ButtonApp>
      </form>
    </>
  );
};
