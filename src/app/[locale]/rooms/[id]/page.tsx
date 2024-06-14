import { BannerRoom } from './banner';
import { MainSection } from './main';
import { PhotoZoneSection } from './photoZone';

export default function Page({ params }: { params: { id: number } }) {
  return (
    <div>
      <BannerRoom />
      <MainSection />
      <PhotoZoneSection />
    </div>
  );
}
