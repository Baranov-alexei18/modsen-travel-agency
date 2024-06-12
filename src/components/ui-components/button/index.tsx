import React from 'react';

import { ButtonType } from './types';

import styles from './style.module.scss';

export const ButtonApp = (
  {
    children, style, onClick, disabled, type, cyId,
  }: Partial<ButtonType>,
) => (
  <button
    data-testid={cyId}
    type={type || 'button'}
    className={styles.button}
    style={{ ...style }}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
