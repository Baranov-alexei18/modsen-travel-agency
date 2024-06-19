'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { LINKS_HEADER } from '@/constants/links';

import { LangSwitcher } from '../ui-components/lang-switcher';

import styles from './styles.module.scss';

export const Header = () => {
  const t = useTranslations('header');
  const locale = useLocale();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/svg/logo.svg" alt="Logo" width={55} height={30} />
      </div>
      <div className={styles.actions}>
        {LINKS_HEADER.map((path) => (
          <Link
            data-testid={path}
            key={path}
            href={`/${locale}/${path}`}
          >
            {t(`${path}`)}
          </Link>
        ))}
      </div>
      <LangSwitcher locale={locale} />
    </header>
  );
};
