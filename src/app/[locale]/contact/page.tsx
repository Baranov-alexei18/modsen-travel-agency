'use client';

import { ContactForm } from '@/components/Forms/ContactForm';

import { BannerContact } from './section/banner';
import { MapSection } from './section/map';

export default function Contact() {
  return (
    <main>
      <BannerContact />
      <ContactForm />
      <MapSection />
    </main>
  );
}
