'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

export const SectionCategory = () => {
  const [categories, setCategories] = useState([]);
  const locale = useLocale();
  const t = useTranslations('pages.home.category');

  return (
    <section className={styles.sectionCategory}>
      <h2 className={styles.sectionTitle}>{t('sectionTitle')}</h2>
    </section>
  );
};

export default withVisibilityObserver(SectionCategory);
