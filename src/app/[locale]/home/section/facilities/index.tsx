'use client';

import { useTranslations } from 'next-intl';

import { FacilityCard } from '@/components/cards/FacilityCard';
import { FACILITIES } from '@/constants';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

export const SectionFacilities = () => {
  const t = useTranslations('pages.home.facilities');

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>{t('sectionTitle')}</h2>
      <p>{t('sectionSubtitle')}</p>
      <div className={styles.allFacilities}>
        {FACILITIES.map(({ src, name }) => <FacilityCard key={name} title={t(name)} src={src} />)}
      </div>
    </section>
  );
};

export default withVisibilityObserver(SectionFacilities);
