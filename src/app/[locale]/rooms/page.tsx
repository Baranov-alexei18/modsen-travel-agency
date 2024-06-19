'use client';

import { useRef } from 'react';

import { BannerRooms } from './sections/banner';
import { PreviewSection } from './sections/previewSection';
import { ViewRoom } from './sections/viewRoom';

export default function Rooms() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <BannerRooms handleScroll={handleScroll} />
      <PreviewSection />
      <ViewRoom ref={contentRef} />
    </main>
  );
}
