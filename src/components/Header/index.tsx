'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { LINKS_HEADER } from '@/constants/links';

import { Sidebar } from '../Sidebar';
import { LangSwitcher } from '../ui-components/lang-switcher';

import styles from './styles.module.scss';

export const Header = () => {
  const t = useTranslations('header');
  const router = useRouter();
  const locale = useLocale();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleChange = (e: { target: { value: string; }; }) => {
    const { value } = e.target;

    const currentPath = window.location.href;

    const newUrl = currentPath.replace(`/${locale}`, `/${value}/`);

    router.push(newUrl);

    router.refresh();
  };

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
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
          <LangSwitcher locale={locale} />
        </div>
        <button className={styles.menuButton} onClick={toggleSidebar}>
          ☰
        </button>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} links={LINKS_HEADER} />
    </>
  );
};
