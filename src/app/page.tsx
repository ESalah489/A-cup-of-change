import Image from 'next/image';
import styles from './page.module.scss';

import logo from '../../public/images/Group 16.svg';
import { AboutSection } from './components/Homepage/AboutSection/AboutSection';
import { CategoriesSection } from './components/Homepage/CategoriesSection/CategoriesSection';

export default function Home() {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.hero}`}>
        <div className={`${styles.hero__body}`}>
          <div className={`${styles.hero__body__img}`}>
            <Image src={logo} lang="responsive" alt="logo" />
          </div>
          <div className={`${styles.hero__body__content}`}>
            <div className={`${styles.hero__body__content__title}`}>
              DISCOVER THE FINEST TEAS SOURCED EXCLUSIVELY
            </div>
            <div className={`${styles.hero__body__content__desc}`}>
              From Akbar Brothers Tea Ceylon And Ranfer Teas Kenya. Elevate Your
              Business With Premium Blends From The Best Tea Gardens.
            </div>
            <div className={`${styles.hero__body__content__cta}`}>
              Know more
            </div>
          </div>
        </div>
      </div>

      <AboutSection />
      <CategoriesSection />
    </div>
  );
}
