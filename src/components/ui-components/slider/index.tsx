import React, { useState } from 'react';

import { TestimonialCard } from '@/components/cards/TestimonialCard';

import { SliderDataType } from './types';

import styles from './styles.module.scss';

const testimonials = [
  {
    date: '2 Mar. 2023',
    rating: 5,
    text: '1. The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
    author: 'Anthony Bruff',
    avatar: '/png/avatar/avatar1.png',
  },
  {
    date: '25 Mar. 2023',
    rating: 4,
    text: '2. The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
    author: 'Regina Gella',
    avatar: '/png/avatar/avatar1.png',
  },
  {
    date: '5 Apr. 2023',
    rating: 5,
    text: '3. The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
    author: 'Jamiyu Allyu',
    avatar: '/png/avatar/avatar1.png',
  },
  {
    date: '12 Mar. 2023',
    rating: 2,
    text: '4. The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
    author: 'Anthony Akka',
    avatar: '/png/avatar/avatar1.png',
  },
  {
    date: '25 May 2024',
    rating: 5,
    text: '5. The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
    author: 'Regina Gella',
    avatar: '/png/avatar/avatar1.png',
  },
  {
    date: '7 sep. 2023',
    rating: 4,
    text: '6. The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
    author: 'Jamiyu Allyu',
    avatar: '/png/avatar/avatar1.png',
  },
  {
    date: '2 Mar. 2023',
    rating: 5,
    text: '7. The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
    author: 'Anthony Bruff',
    avatar: '/png/avatar/avatar1.png',
  },
  {
    date: '25 Mar. 2023',
    rating: 4,
    text: '8. The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
    author: 'Regina Gella',
    avatar: '/png/avatar/avatar1.png',
  },
  {
    date: '5 Apr. 2023',
    rating: 5,
    text: '9. The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
    author: 'Jamiyu Allyu',
    avatar: '/png/avatar/avatar1.png',
  },
];

const ANIMATION_DURING = 100;

export const Slider = ({ data }: { data: SliderDataType[] }) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReviewIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
      setIsAnimating(false);
    }, ANIMATION_DURING);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReviewIndex((prev) => (prev === testimonials.length - 3 ? 0 : prev + 1));
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
        {testimonials.map((testimonial) => (
          <TestimonialCard key={`${testimonial.author}${testimonial.text}`} {...testimonial} />
        ))}
      </div>
    </div>
  );
};
