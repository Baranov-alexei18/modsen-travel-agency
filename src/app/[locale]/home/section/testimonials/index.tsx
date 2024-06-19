'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Slider } from '@/components/ui-components/slider';
import { TESTIMONIALS } from '@/constants/mock';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

export const SectionTestimonial = () => {
  const t = useTranslations('pages.home.testimonials');

  return (
    <section className={styles.SectionTestimonial}>
      <h2>{t('sectionTitle')}</h2>
      <div className={styles.InfoWrapper}>
        <Slider data={TESTIMONIALS} />
      </div>
    </section>
  );
};

export default withVisibilityObserver(SectionTestimonial);
