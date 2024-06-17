import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { useDebounce } from '@/hooks/useDebounce';

import styles from './styles.module.scss';

export type ElasticSearchType = {
  data: { name: string }[],
  onHandleClick: (str: string) => void
}

export const ElasticSearch = (
  { data, onHandleClick }: ElasticSearchType,
) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{name:string}[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(true);

  const debouncedQuery = useDebounce(query);

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
    <div className={styles.wrapper}>
      <Image src="/svg/search.svg" alt="search" width={18} height={18} />
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
        className={styles.input}
      />
      {showResult && query && (
        <div className={styles.results}>
          {isSearching ? (
            <p>Not found</p>
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
