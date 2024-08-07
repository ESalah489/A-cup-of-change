"use client";

import Image from "next/image";
import styles from "./ourBrands.module.scss";
import { CategoriesSection } from "../components/Homepage/CategoriesSection/CategoriesSection";
import { useEffect, useState } from "react";

type Brand = {
    id: number;
    name: string;
    description: string;
    logo_url: string;
    cover_url: string;
};

type Brandtwo = {
    our_brands_page_cover: string;
};
export const OurBrands = () => {
    const [brand, setBrand] = useState<Brand | null>(null);

    const fetchBrand = async () => {
        try {
            const response = await fetch(
                "https://cupofchange-eg.com/dashboard/api/brands"
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            if (data && data.data && data.data.length > 0) {
                setBrand(data.data[0]);
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

    const [brandtwo, setBrandtwo] = useState<Brandtwo | null>(null);

    const fetchBrandtow = async () => {
        try {
            const response = await fetch(
                "https://cupofchange-eg.com/dashboard/api/settings"
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            if (data && data.data) {
                setBrandtwo({
                    our_brands_page_cover: data.data.our_brands_page_cover,
                });
            } else {
                console.error("Empty response received");
            }
        } catch (error) {
            console.error("Error fetching Brand:", error);
        }
    };

    useEffect(() => {
        fetchBrandtow();
    }, []);
    return (
        <div className={styles.wrapper} id="our brands">
            {brandtwo && (
                <div className={styles.wrapper__hero}>
                    <div className={styles.heroBackground}>
                        <Image
                            src={brandtwo.our_brands_page_cover}
                            layout="fill"
                            objectFit="cover"
                            alt="tailer"
                        />
                        <div className={styles.gradientOverlay}></div>
                    </div>

                    <div className={styles.textOverlay}>
                        <h4>OUR BRANDS</h4>
                    </div>
                </div>
            )}

            <div className={styles.brands_tabs}>
                <button
                    className={`${styles.brands_tabs__tab} ${styles.active_tab}`}
                >
                    Akbar Brand
                </button>
                <button className={styles.brands_tabs__tab}>
                    Another Brand
                </button>
                <button className={styles.brands_tabs__tab}>
                    Another Brand
                </button>
            </div>
            <div className={styles.brand}>
                {brand && (
                    <div className={styles.brand__mainone}>
                        <div className={styles.brand__logo}>
                            <Image
                                src={brand.logo_url}
                                alt={`${brand.name} logo`}
                                width={250}
                                height={100}
                                layout="responsive"
                            />
                        </div>
                        <div className={styles.brand__info}>
                            <h4>{brand.name}</h4>
                            <p className={styles.desc}>{brand.description}</p>
                        </div>
                        <div className={styles.separator}>
                            <Image
                                src={brand.cover_url}
                                alt={`${brand.name} cover`}
                                width={50}
                                height={50}
                                layout="responsive"
                            />
                        </div>
                    </div>
                )}
            </div>
            <CategoriesSection />
            <div className={styles.shop_now}>
                <button className={styles.shop_now__btn}>Shop Now</button>
            </div>
        </div>
    );
};
