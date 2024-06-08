import { unstable_setRequestLocale } from 'next-intl/server';

import { JoinForm } from '@/components/Forms/JoinForm';

import { Banner } from './home/banner';

export default function IndexPage({ params: { locale } }: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);

  return (
    <div>
      <Banner />
      <JoinForm />
    </div>
  );
}
