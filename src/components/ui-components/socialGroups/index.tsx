import React from 'react';

import { IconType } from './types';

import styles from './styles.module.scss';

export const SocialGroups = ({ data }: {data: IconType[]}) => (
  <div className={styles.icons}>
    {data.map(({ name, path }) => (
      <a key={name} href={path}>
        <img
          src={name}
          width={20}
          height={20}
          alt={name}
        />
      </a>
    ))}
  </div>
);
