import styles from './CategoriesSection.module.scss';
import blackTeaIcon from '../../../../../public/images/Image 2.png';
import greenTeaIcon from '../../../../../public/images/Image 3.png';
import flavouredGreenTeaIcon from '../../../../../public/images/Image 6.png';
import flavouredTeaIcon from '../../../../../public/images/Image 7.png';
import HerbalTeaIcon from '../../../../../public/images/Image 9.png';
import iceTeaIcon from '../../../../../public/images/Group 377.png';
import Image from 'next/image';

export const CategoriesSection = () => {
  return (
    <div className={`${styles.categories} container`}>
      <h2 className={styles.categories__title}>
        Cup Of Change Offers An Extensive Selection Exclusively Sourced From
        Akbar Brothers Tea Ceylon And Ranfer Teas Kenya
      </h2>

      <div className={styles.categories__content}>
        <div className={styles.categories__content__box}>
          <div className={styles.categories__content__box__img}>
            <Image src={blackTeaIcon} alt="" />
          </div>
          <p className={styles.categories__content__box__text}>Black tea</p>
        </div>
        <div className={styles.categories__content__box}>
          <div className={styles.categories__content__box__img}>
            <Image src={greenTeaIcon} alt="" />
          </div>
          <p className={styles.categories__content__box__text}>GREEN TEA</p>
        </div>
        <div className={styles.categories__content__box}>
          <div className={styles.categories__content__box__img}>
            <Image src={flavouredTeaIcon} alt="" />
          </div>
          <p className={styles.categories__content__box__text}>
            FLAVOURED BLACK TEA
          </p>
        </div>
        <div className={styles.categories__content__box}>
          <div className={styles.categories__content__box__img}>
            <Image src={flavouredGreenTeaIcon} alt="" />
          </div>
          <p className={styles.categories__content__box__text}>
            FLAVOURED Green TEA
          </p>
        </div>
        <div className={styles.categories__content__box}>
          <div className={styles.categories__content__box__img}>
            <Image src={HerbalTeaIcon} alt="" />
          </div>
          <p className={styles.categories__content__box__text}>
            HERBAL INFUSION
          </p>
        </div>
        <div className={styles.categories__content__box}>
          <div className={styles.categories__content__box__img}>
            <Image src={iceTeaIcon} alt="" />
          </div>
          <p className={styles.categories__content__box__text}>ICE TEA</p>
        </div>
      </div>
    </div>
  );
};
