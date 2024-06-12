'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { LINKS_FOOTER, SOCIAL_NETWORK_LINKS } from '@/constants/links';

import { SubscribeForm } from '../Forms/SubscribeForm';
import { ButtonApp } from '../ui-components/button';
import { buttonStyled1 } from '../ui-components/button/options';

import styles from './styles.module.scss';

const Footer = () => {
  const locale = useLocale();
  const t = useTranslations('header');

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>Paradise view</h2>
          <p className={styles.description}>
            The service at the Hotel Monteleone was
            exceptional. There was absolutely no issue
            that was not addressed timely and with
            satisfactory results. We were particulary
            impressed with how the hotel staff anticipated
            our needs (periodically coming by the Board
            Room to check with us)
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3>Quick links</h3>
            <ul>
              <li>Room booking</li>
              <li>Rooms</li>
              <li>Contact</li>
              <li>Explore</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Company</h3>
            <ul>
              <li>Privacy policy</li>
              <li>Refund policy</li>
              <li>F.A.Q</li>
              <li>About</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Social media</h3>
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
          <h3>Newsletter</h3>
          <p>
            Kindly subscribe to our newsletter
            to get latest deals on our rooms and vacation discount.
          </p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" />
            <ButtonApp type="submit" style={buttonStyled1}>Subscribe </ButtonApp>
          </form>
        </div>
      </div>
      <div className={styles.bottomLogo}>
        Paradise view 2024
      </div>
    </footer>
  );
};

export default Footer;
