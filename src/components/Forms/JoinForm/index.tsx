'use client';

import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { LINK_CONTACT } from '@/constants/links';

import styles from './styles.module.scss';

export const JoinForm = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('forms.join');

  const handleClickToContactPage = () => {
    router.push(`/${locale}/${LINK_CONTACT}`);
  };

  return (
    <section className={styles.sectionJoinForm}>
      <h3 className={styles.title}>
        {t('title')}
      </h3>
      <p className={styles.subtitle}>
        {t('subtitle')}
      </p>
      <button
        onClick={handleClickToContactPage}
      >
        {t('btnTitle')}
      </button>
    </section>
  );
};
