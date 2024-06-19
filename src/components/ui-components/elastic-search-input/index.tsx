'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useDebounce } from '@/hooks/useDebounce';

import styles from './styles.module.scss';

export type ElasticSearchType = {
  data: { name: string }[],
  onHandleClick: (str: string) => void
}

export const ElasticSearch = (
  { data, onHandleClick }: ElasticSearchType,
) => {
  const t = useTranslations('pages.toure');

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ name: string }[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(true);

  const debouncedQuery = useDebounce(query);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (debouncedQuery.length > 0) {
      const result = data.filter(
        ({ name }) => name.toLowerCase().includes(debouncedQuery.toLowerCase()),
      );
      if (!result.length) {
        setIsSearching(true);
      }
      setResults(result);
    } else {
      setResults([]);
    }
  }, [debouncedQuery, data]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowResult(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const handleChange = (event: { target: { value: string }; }) => {
    const { value } = event.target;
    setIsSearching(false);
    setShowResult(true);
    setQuery(value);
    onHandleClick(value);
  };

  const handleItem = (query: string) => {
    setQuery(query);
    onHandleClick(query);
    setShowResult(false);
  };

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <Image src="/svg/search.svg" alt="search" width={18} height={18} />
      <input
        type="text"
        placeholder={`${t('search')}`}
        value={query}
        onChange={handleChange}
        className={styles.input}
      />
      {showResult && query && (
        <div className={styles.results}>
          {isSearching ? (
            <p>{t('notFound')}</p>
          ) : (
            results.map((result) => (
              <div
                key={result.name}
                className={styles.resultItem}
                onClick={handleItem.bind(null, result.name)}
                aria-hidden
              >
                {result.name}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
