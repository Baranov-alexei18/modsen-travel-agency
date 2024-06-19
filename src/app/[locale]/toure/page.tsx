import { SectionBestToure } from './section/bestToure';
import { SectionParadise } from './section/paradiseView';
import { SectionTourView } from './section/toursView';

export default function Page() {
  return (
    <main>
      <SectionParadise />
      <SectionTourView />
      <SectionBestToure />
    </main>
  );
}
