'use client';

import { lazy, useRef } from 'react';

import { VideoSection } from './sections/videoSection';
import { ViewRoom } from './sections/viewRoom';

const BannerRoom = lazy(() => import('./sections/banner'));

export default function Rooms() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <BannerRoom handleScroll={handleScroll} />
      <VideoSection />
      <ViewRoom ref={contentRef} />
    </main>
  );
}
