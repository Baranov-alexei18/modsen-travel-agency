'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { ToureCard } from '@/components/cards/ToureCard';
import { ElasticSearch } from '@/components/ui-components/elastic-search-input';
import { API_REQUEST_COUNTRIES, API_REQUEST_DATA_COUNTRY } from '@/constants/mock';
import { useDebounce } from '@/hooks/useDebounce';

import styles from './styles.module.scss';

export const SectionTourView = () => {
  const t = useTranslations('pages.aboutUs');
  // const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });
  const [countries, setCountry] = useState(API_REQUEST_DATA_COUNTRY);
  const [filterQuery, setFilterQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const debouncedQuery = useDebounce(filterQuery);

  useEffect(() => {
    if (debouncedQuery.length > 0) {
      const filtetContries = API_REQUEST_DATA_COUNTRY.filter(
        ({ country }) => country.toLowerCase().includes(debouncedQuery.toLowerCase()),
      );
      setCountry(filtetContries);
    } else {
      setCountry(API_REQUEST_DATA_COUNTRY);
    }
    setIsSearching(false);
  }, [debouncedQuery]);

  const filterCountries = (query: string) => {
    setIsSearching(true);
    setFilterQuery(query);
  };

  return (
    <section className={styles.wrapper}>
      <h2>Tour search </h2>
      <h4>Choose a tour to any country</h4>
      <ElasticSearch
        data={API_REQUEST_COUNTRIES.data?.countries}
        onHandleClick={filterCountries}
      />
      <div className={styles.wrapperTours}>
        {isSearching && <div> Loading... </div>}
        {!countries.length && !isSearching && <h1>Sorry, tours not found... </h1>}
        {!!countries.length && !isSearching && countries.map(({
          code, currency, country, lang,
        }) => (
          <ToureCard
            key={`${code}-${country}`}
            code={code}
            currency={currency}
            country={country}
            lang={lang}
          />
        ))}
      </div>
    </section>
  );
};
