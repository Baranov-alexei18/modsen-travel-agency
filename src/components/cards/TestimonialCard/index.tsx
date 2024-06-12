import React from 'react';
import Image from 'next/image';

import { TestimonialCardType } from './types';

import styles from './styles.module.scss';

export const TestimonialCard = ({
  date, rating, text, author, avatar,
}: TestimonialCardType) => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      <span className={styles.date}>{date}</span>
      <div className={styles.rating}>
        {Array.from({ length: rating }).map((_, index) => (
          <span key={rating}>&#9733;</span>
        ))}
      </div>
    </div>
    <blockquote className={styles.text}>
      <p>{text}</p>
    </blockquote>
    <div className={styles.footer}>
      <div className={styles.avatar}>
        <Image
          src={avatar}
          alt={`${author}'s avatar`}
          width={42}
          height={42}
          className={styles.avatarImage}
        />
      </div>
      <span className={styles.author}>{author}</span>
    </div>
  </div>
);
