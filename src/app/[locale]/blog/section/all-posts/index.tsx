import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { PostsAllTypes } from './types';

import styles from './styles.module.scss';

export const SectionPosts = ({
  data, clickNext, clickPrev, disableNext, disablePrev,
}: PostsAllTypes) => {
  const t = useTranslations('pages.home.posts');
  const tBtn = useTranslations('pages.blog');
  const locale = useLocale();

  return (
    <div className={styles.allPosts}>
      <h1>{t('allPost')}</h1>
      <div className={styles.pagination}>
        <button type="button" className={styles.prev} onClick={clickPrev} disabled={disablePrev}>{tBtn('prev')}</button>
        <button type="button" className={styles.next} onClick={clickNext} disabled={disableNext}>{tBtn('next')}</button>
      </div>
    </div>
  );
};
