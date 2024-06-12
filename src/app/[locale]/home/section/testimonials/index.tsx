'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Slider } from '@/components/ui-components/slider';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

export const SectionTestimonial = () => {
  const t = useTranslations('pages.home.testimonials');
  const [reviews, setReviews] = useState([]);

  return (
    <section className={styles.SectionTestimonial}>
      <h2>{t('sectionTitle')}</h2>
      <div className={styles.InfoWrapper}>
        <Slider data={reviews} />
      </div>
    </section>
  );
};

export default withVisibilityObserver(SectionTestimonial);
