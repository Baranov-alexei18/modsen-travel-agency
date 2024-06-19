import { ROOMS_HOTELS } from '@/constants/mock';

import { BannerRoom } from './banner';
import { MainSection } from './main';
import { PhotoZoneSection } from './photoZone';

export default function Page({ params }: { params: { id: string } }) {
  const filterData = ROOMS_HOTELS.filter(({ id }) => id === parseInt(params.id, 10))[0];
  const { title, src, price } = filterData;

  return (
    <div>
      <BannerRoom />
      <MainSection title={title} price={price} />
      <PhotoZoneSection />
    </div>
  );
}
