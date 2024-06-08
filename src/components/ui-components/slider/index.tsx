import React, { useState } from 'react';

import LeftArrow from '@/assets/image/svg/arrow-left.svg';
import RightArrow from '@/assets/image/svg/arrow-right.svg';

import { SliderDataType } from './types';

import styles from './styles.module.scss';

const ANIMATION_DURING = 300;

export const Slider = ({ data } : {data: SliderDataType[]}) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReviewIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
      setIsAnimating(false);
    }, ANIMATION_DURING);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReviewIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, ANIMATION_DURING);
  };

  return (
    <div className={styles.slider}>
      <div className={`${styles.review} ${isAnimating ? styles.fade : ''}`}>
        <p className={styles.content}>{data[currentReviewIndex].content}</p>
      </div>
      <div className={styles.sliderFooter}>
        <div className={styles.author}>
          <img width="48" height="48" src={data[currentReviewIndex].image} alt="person-icon" />
          <div>
            <p className={styles.title}>{data[currentReviewIndex].author}</p>
            <p className={styles.subtitle}>{data[currentReviewIndex].city}</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.button} onClick={handlePrev}>
            <img width="24" height="24" src={LeftArrow} alt="prev" />
          </button>
          <button type="button" className={styles.button} onClick={handleNext}>
            <img width="24" height="24" src={RightArrow} alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};
