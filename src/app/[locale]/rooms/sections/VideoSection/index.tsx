'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

import { ButtonApp } from '@/components/ui-components/button';

import styles from './styles.module.scss';

export const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles.wrapper}>
      <video
        ref={videoRef}
        className={styles.video}
        controls
      >
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
      {!isPlaying && (
        <ButtonApp onClick={handlePlayPause}>
          <Image src="/svg/triangle.svg" alt="Move" width={18} height={13} />
        </ButtonApp>
      )}
    </div>
  );
};
