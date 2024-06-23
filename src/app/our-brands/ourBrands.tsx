import Image from 'next/image';
import styles from './ourBrands.module.scss';
import akbarLogo from '../../../public/images/akbar-logo.png';
import brandBg from '../../../public/images/Mask Group 7@2x.png';
import { CategoriesSection } from '../components/Homepage/CategoriesSection/CategoriesSection';

export const OurBrands = () => {
  return (
    <div className={styles.wrapper} id="our brands">
      <div className={styles.wrapper__hero}>
        <h4>OUR BRANDS</h4>
      </div>
      <div className={styles.brands_tabs}>
        <button className={`${styles.brands_tabs__tab} ${styles.active_tab}`}>
          Akbar Brand
        </button>
        <button className={`${styles.brands_tabs__tab}`}>Another Brand</button>
        <button className={`${styles.brands_tabs__tab}`}>Another Brand</button>
      </div>
      <div className={styles.brand}>
        <div className={styles.brand__logo}>
          <Image src={akbarLogo} alt="akbar logo" />
        </div>
        <div className={styles.brand__info}>
          <h4>THE AKBAR BRAND</h4>
          <p className={styles.desc}>
            The Akbar Brothers Heritage Dates Far Back To The Intial Cultivation
            Of The Fine Ceylon Tea On The Sri Lankan Mountain Slopes. The
            Akbarally Family Has Been Involved In Its Selection, Blending,
            Packaging And Export. Today, The Family-Owned Firm Is Sri Lanka’s
            Largest Tea Exporter, A Position It Has Enjoyed Unchallenged Since
            1992.
          </p>
        </div>

        <div className={styles.separator}>
          <Image src={brandBg} alt="akbar field" />
        </div>
        <p className={styles.desc}>
          A Force Against Time, Akbar Brothers Maintains Closely To Principles
          Established By Its Revered Founders, Abbas And Inayet Akbarally: An
          Emphasis On Product Quality Based On Exhaustive Knowledge And
          Experience Of Tea And The Tea Industry, And A Business Culture That
          Places The Highest Value On Fair Dealing, Integrity And Reliability.
          To This Day, Every Consignment Of Akbar Tea Is Personally Approved By
          A Family Member Before It Is Shipped.
        </p>
        <p className={styles.desc}>
          In Addition To Being The World’s Largest Exporter Of Ceylon Tea, Akbar
          Brothers Has Successfully Diversified Into A Range Of Sectors Through
          Strategic Reinvention And Expansion. Today, The Group Has A Firm
          Presence In The Sectors Of Tea, Renewable Energy, Healthcare,
          Packaging, Property Development And Environmental Services.
        </p>
      </div>
      <CategoriesSection />
      <div className={styles.shop_now}>
        <button className={styles.shop_now__btn}>Shop Now</button>
      </div>
    </div>
  );
};
