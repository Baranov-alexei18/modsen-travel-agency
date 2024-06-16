import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import styles from './styles.module.scss';

const languages = [
  { code: 'en', label: 'English', flag: '/svg/flag-EN.svg' },
  { code: 'ru', label: 'Русский', flag: '/svg/flag-RU.svg' },
];

export const LangSwitcher = ({ locale }: { locale: string }) => {
  const router = useRouter();

  const [showTooltip, setShowTooltip] = useState(false);

  const handleLanguageChange = (code: string) => {
    const currentPath = window.location.href;

    const newUrl = currentPath.replace(`/${locale}`, `/${code}/`);

    router.push(newUrl);

    router.refresh();
    setShowTooltip(false);
  };

  return (
    <div className={styles.languageSwitcher} onMouseLeave={() => setShowTooltip(false)}>
      <Image
        src={languages.find(({ code }) => code === locale)!.flag || ''}
        alt={languages.find(({ code }) => code === locale)!.label || ''}
        onClick={() => setShowTooltip(!showTooltip)}
        width={50}
        height={35}
        className={styles.flag}
      />
      {showTooltip && (
        <div className={styles.languageOptions}>
          {languages.map((lang) => (
            <div
              key={lang.code}
              className={`${styles.languageOption} ${lang.code === locale ? styles.active : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
              aria-hidden
            >
              <Image
                src={lang.flag}
                alt={lang.label}
                className={styles.optionFlag}
                width={53}
                height={40}
              />
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
