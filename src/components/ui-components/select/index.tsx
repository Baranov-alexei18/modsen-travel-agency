import React from 'react';

import { SelectType } from './types';

import styles from './styles.module.scss';

export const SelectApp = ({
  cyId, onChange, onBlur, name, value, children, defaultValue,
}: Partial<SelectType>) => (
  <select
    name={name}
    data-testid={cyId}
    className={styles.wrapper}
    defaultValue={defaultValue}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
  >
    {children}
  </select>
);
