import { JoinForm } from '@/components/Forms/JoinForm';

import { SectionAboutUs } from './section/about-us';
import { SectionTeam } from './section/our-team';

import styles from '../styles.module.scss';

export default function AboutUs() {
  return (
    <main className={styles.main}>
      <SectionAboutUs />
      <SectionTeam />
      <JoinForm />
    </main>
  );
}
