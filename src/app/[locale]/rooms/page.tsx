'use client';

import { lazy, useRef } from 'react';

import { PreviewSection } from './sections/previewSection';
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
      <PreviewSection />
      <ViewRoom ref={contentRef} />
    </main>
  );
}
