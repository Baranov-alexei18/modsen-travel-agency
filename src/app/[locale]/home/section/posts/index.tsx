'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { ButtonApp } from '@/components/ui-components/button';
import { LINK_ROOM } from '@/constants/links';
import { formatDate } from '@/helpers/formatDate';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';
import { PostDataType } from '@/types/post';

import styles from './styles.module.scss';

const SectionPost = () => {
  const [posts, setPosts] = useState<PostDataType[] | null | undefined>([]);
  const [featuredPost, setFeaturedPost] = useState<PostDataType | null>(null);

  const t = useTranslations('pages.home.posts');
  const router = useRouter();
  const locale = useLocale();

  const handleClickToBlogPostPage = () => {
    router.push(`${locale}/${LINK_ROOM}`);
  };

  if (!featuredPost) {
    return <div>Loading...</div>;
  }

  const {
    src, title, subtitle, date_created, authorName,
  } = featuredPost!;

  return (
    <section className={styles.wrapper}>
      <div className={styles.featuredPostWrapper}>
        <h1 className={styles.sectionName}>{t('featuredPost')}</h1>
        <div className={styles.postCard}>
          <div className={styles.image}>
            <Image
              src={src}
              alt="Post Image"
              fill
            />
          </div>
          <p className={styles.infoPost}>
            By
            <span>
              {` ${authorName} `}
            </span>
            |
            {` ${formatDate(date_created!)}`}
          </p>
          <div className={styles.content}>
            <h2 className={styles.title}>
              {title}
            </h2>
            <p className={styles.subtitle}>
              {subtitle}
            </p>
            <ButtonApp
              backgroundColor="var(--color-yellow)"
              onClick={handleClickToBlogPostPage}
            >
              {t('btnTitle')}
            </ButtonApp>
          </div>
        </div>
      </div>
      <div className={styles.allPostWrapper}>
        <div className={styles.headerAllPost}>
          <h1 className={styles.sectionName}>{t('allPost')}</h1>
          <Link href={`${locale}/${LINK_ROOM}`} locale={locale}>{t('view')}</Link>
        </div>
      </div>
    </section>
  );
};

export default withVisibilityObserver(SectionPost);
