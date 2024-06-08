'use client';

import Link from 'next/link';

import { LINK_HOME } from '@/constants/links';

import styles from './styles.module.scss';

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className={styles.wrapper}>
          <h2>Not Found page</h2>
          <p>Could not find requested resource</p>
          <Link href={LINK_HOME}>Return to home page</Link>
        </div>
      </body>
    </html>
  );
}
