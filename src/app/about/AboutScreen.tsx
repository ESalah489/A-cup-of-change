"use client";
import Image from 'next/image';
import styles from './AboutScreen.module.scss';

import aboutIntro from '../../../public/images/about/about-intro.jpg';
import oscarImage from '../../../public/images/about/1@2x.png';
import image1 from '../../../public/images/about/Group 413.png';
import image2 from '../../../public/images/about/Image 14.png';
import image3 from '../../../public/images/about/tailer-img.png';
import image4 from '../../../public/images/about/Image 15.png';
import image5 from '../../../public/images/about/0.70415800_1620658068_45.png';
import { useEffect, useState } from 'react';
type Award = {
  id: number;
  name: string;
  date: string;
  image_url: string;
};
export const AboutScreen = () => {
  const [award, setAward] = useState<Award[]>([]);

  const fetchBrand = async () => {
      try {
          const response = await fetch("https://cupofchange-eg.com/dashboard/api/awards");
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
          const data = await response.json();
          if (data && data.data && data.data.length > 0) {
            setAward(data.data);
          } else {
              console.error("Empty response received");
          }
      } catch (error) {
          console.error("Error fetching Brand:", error);
      }
  };

  useEffect(() => {
      fetchBrand();
  }, []);
  return (
    <div className={styles.about_wrapper}>
      <div className={styles.hero}>
        <div className={styles.hero__content}>
          <h2 className={styles.hero__content__title}>
            TRANSFORM YOUR TEA EXPERIENCE
          </h2>
          <p className={styles.hero__content__desc}>
            Cup Of Change Is An Egyptain Based Company Deeply Rooted In The Rich
            Heritage Of Sri Lanka’s Tea Industry, Drawing On Four Generations Of
            Tea Tasting, Blending, And Packaging.
          </p>
          <p className={styles.hero__content__desc}>
            The Journey Begins With Our Forefathers Founding M. S. Hebtulabhoy &
            Company Established In 1907. This Historic Company Played A Pivotal
            Role As Export Pioneers, Venturing Into The Tea Business When It Was
            Dominated By British-Based Companies. Their Bold Move Not Only Broke
            Monopolies But Also Diversified Into Various Sectors Like Coconut
            Products, Spices, And Modern Machinery For Tea Processing. Their
            Commitment To Innovation And Quality Laid A Strong Foundation For
            The Ceylonese Tea Industry’s Growth.
          </p>
        </div>
        <div className={styles.hero__img}>
          <Image src={aboutIntro} alt="" />
        </div>
      </div>

      <div className={styles.about_wrapper__founded}>
        <p>
          Founded In 1969 By The Visionary Akbarally Brothers Abbas And Inayet,
          Akbar Brothers (Pvt) Limited Has Become Synonymous With Excellence In
          The Tea Industry. Their Forward-Thinking Approach Led Them To
          Revolutionize Tea Bag Production Through Advanced Machinery And To
          Develop Robust Warehousing Capabilities To Meet The Growing Global
          Demand. As The Largest Tea Company In Sri Lanka, They Have Held The
          Prestigious Title Of The Worlds Largest Exporter Of Ceylon Tea For An
          Impressive 30 Consecutive Years. Their Commitment To Quality Is
          Unmatched, With Every Consignment Of Akbar Tea Personally Approved By
          A Family Member Before Shipment, Ensuring Exceptional Standards And
          Reliability. Akbar Brothers Global Footprint Extends To Over 90
          Nations, Making Their Premium Ceylon Tea A Favorite Among Millions Of
          Tea Enthusiasts Worldwide. At Cup Of Change, We Take Pride In Carrying
          Forward Our Family Legacy Of Excellence And Innovation Representing
          Akbar Brothers (Pvt) Limited In Egypt. Our Curated Selection Of
          Premium Teas And Brands Reflects Our Deep Understanding Of Tea
          Traditions And Commitment To Quality, Sustainability And Authenticity.
        </p>
      </div>

      <div className={styles.akbar_brand}>
        <h2 className={styles.title}>THE AKBAR BRAND</h2>
        {award.map((oneaward) => (
        <div className={styles.akbar_brand__content} key={oneaward.id}>
          <div className={styles.akbar_brand__content__img}>
            <Image src={oneaward.image_url} alt="" width={400} height={500} />
          </div>
          <div className={styles.akbar_brand__content__tabs}>
            <div className={styles.akbar_brand__content__tabs__tab}>
              <div className={styles.akbar_brand__content__tabs__tab__text}>
                <p>{oneaward.name}</p>
              </div>
              <div className={styles.akbar_brand__content__tabs__tab__date}>
                <p>{oneaward.date}</p>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
      <div className={styles.ceylon_tea}>
        <div className={styles.ceylon_tea__head}>
          <div className={styles.ceylon_logo}>
            <Image src={image1} alt="ceylon logo" />
          </div>
          <div className={styles.ceylon_tea__head__text}>
            <h3>CEYLON TEA</h3>
            <p>
              By 1880, The Hitherto Thriving Coffee Industry In Ceylon Had Been
              Ravaged To Virtual Non-Existence By The Blight. Nearly Quarter Of
              Million Acres Of Coffee Plants Were Uprooted And The Tea (Camellia
              Thea) Plant Was Accorded Its Pride Of Place Instead. Thus Began
              The Great Ceylon Tea Industry.
            </p>
          </div>
        </div>
        <div className={styles.ceylon_tea__bg}>
          <Image src={image2} alt="1366 pic" />
        </div>

        <div className={styles.ceylon_tea__brief}>
          <div className={styles.ceylon_tea__brief__body}>
            <div className={styles.ceylon_tea__brief__body__img}>
              <Image src={image3} layout="responsive" alt="tailer" />
            </div>

            <div className={styles.ceylon_tea__brief__body__history}>
              <p>
                This Tea Saga Of Ceylon Begins With Tea Seeds And Young Tea
                Plants Of The Assam Jat Imported From The Botanical Gardens In
                Calcutta, Being Experimentally Planted In The Peradeniya
                Botanical Gardens Near Kandy In 1839. In Addition, A Handful Of
                More Enterprising Coffee Planters Too Had Cleared The Odd Half
                Acre And Planted It With Tea. Being Chiefly Concerned With
                Lucrative Coffee, Planters In General Had No Time For Tea And
                Those Experimental Plots Too Were Forgotten In Time For Some
                Thirty Years.
              </p>
              <p>
                However, Tea Did Grow. Moreover, It Was Noted That Tea Grew Well
                In The Hills Of Ceylon. However, The First Commercially Planted
                Tea Happened In 1867 At Loolecondera Estate By A Scotsman Named
                James Taylor When Coffee Industry Was Being Severely Plagued By
                The Blight. The First Recorded Shipment Of Tea Came Five Years
                Later In 1872 With The Export Of 23 Pounds, Valued At 58 Rupees.
                The First Vessel Recorded As Carrying Ceylon Tea To England Was
                The Steam-Ship ‘Duke Argyll’ In 1877.
              </p>
              <div className={styles.persons}>
                <Image src={image4} layout="responsive" alt="persons" />
              </div>
              <p>
                Economically Devastated By The Coffee Leaf Disease By The Early
                1880’S, Coffee Planters Stampeded Into Tea, Which Was Then Fast
                Gathering Momentum. Experienced Tea Makers And Cultivators From
                China And India Were Freely Given To Planters In Ceylon. To Meet
                The Unmanageable Demand For Tea Plants, Seeds Were Imported From
                Assam , And To A Lesser Extent China , Which Were Natured In Tea
                Nurseries In Several Suitable Locations.
              </p>
              <p>
                {' '}
                Ceylon Tea Grows From Almost Sea Level To 7000 Ft. The Climate
                Of Ceylon (Now Sri Lanka) Varies Very Much According To
                Locality, And, Has A Marked Effect On The Flavor And Quality Of
                Tea.
              </p>
            </div>
          </div>
          <div className={styles.kenyan_tea}>
            <h3>KENYAN TEA</h3>
            <p>
              The Incursion Of Kenyan Tea Dates Back To The Early 20Th Century
              When Planters, Experienced Workers, And Tea Companies From Ceylon
              (Now Sri Lanka) Ventured To Kenya. This Migration Was Driven By
              Various Factors Such As Favorable Climate Conditions, Fertile
              Soils, And Government Incentives In Kenya That Encouraged Tea
              Cultivation.The Experienced Tea Planters Brought Their Expertise
              And Knowledge Of Tea Cultivation And Processing Techniques To
              Kenya, Laying The Foundation For The Kenyan Tea Industry. They
              Implemented Modern Farming Methods, Improved Processing
              Technologies, And Established Large-Scale Tea Estates Across The
              Highlands Of Kenya.Over Time, Kenya Emerged As A Significant
              Player In The Global Tea Market, Known Particularly For Its Robust
              And Brisk Teas. The Influx Of Skilled Labor And Investment From
              Ceylon Contributed Significantly To The Rapid Growth And Success
              Of The Kenyan Tea Industry, Shaping Its Identity And Establishing
              It As A Key Producer Of High-Quality Teas On The International
              Stage.
            </p>
          </div>
        </div>
        <div className={styles.farmers}>
          <Image src={image5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
