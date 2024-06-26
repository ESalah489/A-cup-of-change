
"use client";
import styles from './CategoriesSection.module.scss';
import blackTeaIcon from '../../../../../public/images/Image 2.png';
import greenTeaIcon from '../../../../../public/images/Image 3.png';
import flavouredGreenTeaIcon from '../../../../../public/images/Image 6.png';
import flavouredTeaIcon from '../../../../../public/images/Image 7.png';
import HerbalTeaIcon from '../../../../../public/images/Image 9.png';
import iceTeaIcon from '../../../../../public/images/Group 377.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';


type Brand = {
  id: number;
  name: string;
  description: string;
  main_image_url: string;
};

export const CategoriesSection = () => {
  const [brand, setBrand] = useState<Brand[]>([]);

  const fetchBrand = async () => {
      try {
          const response = await fetch("https://cupofchange-eg.com/dashboard/api/products");
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
          const data = await response.json();
          if (data && data.data && data.data.length > 0) {
              setBrand(data.data);
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
    <div className={`${styles.categories} container`}>
      <h2 className={styles.categories__title}>
        Cup Of Change Offers An Extensive Selection Exclusively Sourced From
        Akbar Brothers Tea Ceylon And Ranfer Teas Kenya
      </h2>
       <div className={styles.categories__content}>
        {brand.map((onebrand) => (
          <div key={onebrand.id} className={styles.categories__content__box}>
            <div className={styles.categories__content__box__img}>
              <Image src={onebrand.main_image_url} alt={onebrand.name} width={100} height={100} />
            </div>
            <p className={styles.categories__content__box__text}>{onebrand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
