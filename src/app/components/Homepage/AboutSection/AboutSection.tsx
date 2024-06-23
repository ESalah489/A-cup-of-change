'use client';
import Image from 'next/image';
import styles from './AboutSection.module.scss';

import akbarLogo from '../../../../../public/images/akbar-logo.png';
import greenLogo from '../../../../../public/images/green-logo.png';
import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';

export const AboutSection = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const animation = useCallback(() => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });

    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  }, []);
  useEffect(() => {
    requestAnimationFrame(animation);
  }, [animation]);

  return (
    <div className={styles.about}>
      <div className={`${styles.about__body}`}>
        <div className={styles.about__body__logos}>
          <div className={styles.about__body__logos__logo}>
            <Image src={akbarLogo} alt={''} />
          </div>
          <div className={styles.about__body__logos__logo}>
            <Image src={greenLogo} alt={''} />
          </div>
        </div>
        <h2 className={`${styles.about__body__title}`}>
          ALWAYS ABOUT QUALITY & PRODUCT SAFETY BLENDED WITH PERFECTION
        </h2>
        <p className={`${styles.about__body__desc}`}>
          150 Years Of Serving Tea - Blending & Packaging Teas. Your B2B Tea
          Supplier Wholesale Bulk Sales - Trading Ingredients Teas, Herbs, And
          Spices
        </p>

        <a href="#!" className={`${styles.about__body__cta}`}>
          Know more
        </a>
      </div>

      <div className={`${styles.about__bottom_bg}`}></div>
      <div className={`${styles.about__text_slider}`}>
        <p ref={firstText}>WORLD’S LEADING EXPORTER OF CEYLON TEA</p>
        <p ref={secondText}>WORLD’S LEADING EXPORTER OF CEYLON TEA</p>
      </div>
    </div>
  );
};
