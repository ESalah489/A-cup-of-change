"use client";
import Image from "next/image";
import styles from "./ourSelection.module.scss";
import { useEffect, useState } from "react";
type Brand = {
    id: number;
    name: string;
    description: string;
    image_url: string;
};
type BrandTwo = {
    b2b_brief: string;
    b2b_page_cover:string;
};

export const OurSelection = () => {
    const [brand, setBrand] = useState<Brand[]>([]);

    const fetchBrand = async () => {
        try {
            const response = await fetch(
                "https://cupofchange-eg.com/dashboard/api/products"
            );
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

    const [brandtwo, setBrandtwo] = useState<BrandTwo | null>(null);

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
                    b2b_brief: data.data.b2b_brief,
                    b2b_page_cover: data.data.b2b_page_cover,

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
        <div className={styles.our_selection}>
                        {brandtwo && (
            <div className={styles.our_selection__hero}>
                    <div className={styles.heroBackground}>
                        <Image
                            src={brandtwo.b2b_page_cover}
                            layout="fill"
                            objectFit="cover"
                            alt="tailer"
                            width={0}
                            height={0}
                        />
                    </div>
                    <div className={styles.gradientOverlay}></div>
                    <div className={styles.textOverlay}>
                    <h4>Teas</h4>
                    <p>{brandtwo.b2b_brief}</p>
                    </div>
                    </div>
            )}

            <div className={styles.ceylon_tea_kinds}>
                <h4>Our Type Of Tea</h4>
                <span></span>
                {brand.map((onebrand) => (
                    <div className={styles.kind} key={onebrand.id}>
                        <div className={styles.kind__image}>
                            <Image
                                src={onebrand.image_url}
                                alt=""
                                layout="responsive"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className={styles.kind__body}>
                            <h5>{onebrand.name}</h5>
                            <p>{onebrand.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
