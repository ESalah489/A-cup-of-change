"use client";
import Image from "next/image";
import styles from "./AboutSection.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";

type Brand = {
    history_brief: string;
    quality_brief: string;
    akbar_logo: string;
    ranfer_logo: string;
    home_page_cover: string;
};

export const AboutSection = () => {
    const firstText = useRef<HTMLParagraphElement>(null);
    const secondText = useRef<HTMLParagraphElement>(null);
    let xPercent = 0;
    let direction = -1;

    const animation = useCallback(() => {
        if (xPercent <= -100) {
            xPercent = 0;
        }
        if (xPercent > 0) {
            xPercent = -100;
        }
        if (firstText.current && secondText.current) {
            gsap.set(firstText.current, { xPercent: xPercent });
            gsap.set(secondText.current, { xPercent: xPercent });
        }

        xPercent += 0.1 * direction;
        requestAnimationFrame(animation);
    }, []);

    useEffect(() => {
        requestAnimationFrame(animation);
    }, [animation]);

    const [brand, setBrand] = useState<Brand | null>(null);

    const fetchBrand = async () => {
        try {
            const response = await fetch(
                "https://cupofchange-eg.com/dashboard/api/settings"
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            if (data && data.data) {
                setBrand({
                    history_brief: data.data.history_brief,
                    quality_brief: data.data.quality_brief,
                    akbar_logo: data.data.akbar_logo,
                    ranfer_logo: data.data.ranfer_logo,
                    home_page_cover: data.data.home_page_cover,
                });
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
        <div className={styles.about}>
            {brand && (
                <>
                    <div className={`${styles.about__body}`}>
                        <div className={styles.about__body__logos}>
                            <div className={styles.about__body__logos__logo}>
                                <Image
                                    src={brand.akbar_logo}
                                    // layout="responsive"
                                    width={100}
                                    height={100}
                                    alt="Akbar Logo"
                                />
                            </div>
                            <div className={styles.about__body__logos__logo}>
                                <Image
                                    src={brand.ranfer_logo}
                                    // layout="responsive"
                                    width={100}
                                    height={100}
                                    alt="Ranfer Logo"
                                />
                            </div>
                        </div>
                        <h2 className={`${styles.about__body__title}`}>
                            {brand.quality_brief}
                        </h2>
                        <p className={`${styles.about__body__desc}`}>
                            {brand.history_brief}
                        </p>

                        {/* <a href="#!" className={`${styles.about__body__cta}`}>
                            Know more
                        </a> */}
                        <div className={`${styles.about__body__cta}`}>
                                    <button className={styles.about__body__cta__btn}>Know more</button>
                                </div>
                    </div>
                    <div className={`${styles.about__bottom_bg}`}>
                        <Image
                            src={brand.home_page_cover}
                            layout="responsive"
                            width={50}
                            height={50}
                            alt="hero cover"
                        />
                    </div>
                </>
            )}
            <div className={`${styles.about__text_slider}`}>
                <p ref={firstText}>WORLD’S LEADING EXPORTER OF CEYLON TEA</p>
                <p ref={secondText}>WORLD’S LEADING EXPORTER OF CEYLON TEA</p>
            </div>
        </div>
    );
};
