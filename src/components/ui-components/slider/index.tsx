import React, { useState } from 'react';

import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { TestimonialCardType } from '@/components/cards/TestimonialCard/types';

import styles from './styles.module.scss';

const ANIMATION_DURING = 100;
const MOVE_SLIDER = 3;

export const Slider = ({ data }: { data: TestimonialCardType[] }) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReviewIndex((prev) => (prev === 0 ? data.length - MOVE_SLIDER : prev - 1));
      setIsAnimating(false);
    }, ANIMATION_DURING);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReviewIndex((prev) => (prev === data.length - MOVE_SLIDER ? 0 : prev + 1));
      setIsAnimating(false);
    }, ANIMATION_DURING);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.buttons}>
        <button className={styles.prev} onClick={handlePrev}>&#10094;</button>
        <button className={styles.next} onClick={handleNext}>&#10095;</button>
      </div>
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${currentReviewIndex * 510}px)` }}
      >
        {data.map((testimonial) => (
          <TestimonialCard key={`${testimonial.author}${testimonial.text}`} {...testimonial} />
        ))}
      </div>
    </div>
  );
};
