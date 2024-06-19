import { lazy } from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

const SectionParadise = lazy(() => import('./home/section/paradiseView'));
const SectionFacilities = lazy(() => import('./home/section/facilities'));
const SectionLuxuriousRooms = lazy(() => import('./home/section/luxuriousRooms'));
const SectionTestimonial = lazy(() => import('./home/section/testimonials'));

export default function IndexPage({ params: { locale } }: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <SectionParadise />
      <SectionFacilities />
      <SectionLuxuriousRooms />
      <SectionTestimonial />
    </main>
  );
}
