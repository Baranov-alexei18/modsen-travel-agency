'use client';

import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import * as Yup from 'yup';

import { SOCIAL_NETWORK_LINKS } from '@/constants/links';

import { ButtonApp } from '../ui-components/button';
import { buttonStyled1 } from '../ui-components/button/options';

import styles from './styles.module.scss';

const Footer = () => {
  const t = useTranslations('footer');

  const {
    handleSubmit, handleChange, handleBlur, values,
  } = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }),
    onSubmit: async (values: {
      email: string,
    }, { resetForm }: { resetForm: () => void }) => {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_SUBSCRIBE!,
          { to_email: values.email },
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_KEY!,
          },
        )
        .then(
          () => {
            resetForm();
          },
          (error) => {
            console.error(error);
          },
        );
    },
  });
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>{t('title')}</h2>
          <p className={styles.description}>{t('subtitle')}</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3>{t('quicLinks')}</h3>
            <ul>
              <li>Room booking</li>
              <li>Rooms</li>
              <li>Contact</li>
              <li>Explore</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>{t('company')}</h3>
            <ul>
              <li>Privacy policy</li>
              <li>Refund policy</li>
              <li>F.A.Q</li>
              <li>About</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>{t('socialLinks')}</h3>
            <ul>
              {SOCIAL_NETWORK_LINKS.map(({ name, path }) => (
                <li key={name}>
                  <Link href={path}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.sectionNewLetter}>
          <h3>{t('newLetterTitle')}</h3>
          <p>{t('newLetterSubtitle')}</p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              name="email"
              placeholder={`${t('email')}`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <ButtonApp type="submit" style={buttonStyled1} onClick={handleSubmit}>
              {t('subscribe')}
            </ButtonApp>
          </form>
        </div>
      </div>
      <div className={styles.bottomLogo}>
        {`${t('title')} ${new Date().getFullYear()}`}
      </div>
    </footer>
  );
};

export default Footer;
