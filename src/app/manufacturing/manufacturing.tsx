"use client";

import Image from "next/image";
import styles from "./manufacturing.module.scss";
import { useEffect, useState } from "react";

type Certificates = {
    id: number;
    name: string;
    description: string;
    image_url: string;
};

type Brand = {
    manufacturing_page_cover: string;
    manufacturing_description: string;
    manufacturing_page_video: string;
    certifications_description: string;
};
export const Manufactoring = () => {
    const [cert, setCert] = useState<Certificates[]>([]);

    const fetchCert = async () => {
        try {
            const response = await fetch(
                "https://cupofchange-eg.com/dashboard/api/certificates"
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            if (data && data.data && data.data.length > 0) {
                setCert(data.data);
            } else {
                console.error("Empty response received");
            }
        } catch (error) {
            console.error("Error fetching Brand:", error);
        }
    };

    useEffect(() => {
        fetchCert();
    }, []);

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
                    manufacturing_page_cover:
                        data.data.manufacturing_page_cover,
                    manufacturing_description:
                        data.data.manufacturing_description,
                    manufacturing_page_video:
                        data.data.manufacturing_page_video,
                    certifications_description:
                        data.data.certifications_description,
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
        <section className={styles.manufacturing} id="manufacturing">
            {brand && (
                <>
                    <div className={styles.manufacturing__banner}>
                        <Image
                            src={brand.manufacturing_page_cover}
                            layout="responsive"
                            width={50}
                            height={50}
                            alt="hero cover"
                        />
                    </div>

                    <h3>MANUFACTURING</h3>
                    <p>{brand.manufacturing_description}</p>

                    <div className={styles.manufacturing__banner}>
                        <video controls width="100%" autoPlay>
                            <source
                                src={brand.manufacturing_page_video}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>{" "}
                    </div>
                    <div className={styles.certification}>
                        <h3 className={styles.certification__title}>
                            CERTIFICATIONS
                        </h3>
                        <p className={styles.certification__subtitle}>
                            {brand.certifications_description}
                        </p>
                    </div>
                </>
            )}

            <div className={styles.certification__wrapper}>
                {cert.length > 0 ? (
                    cert.map((onecert) => (
                        <div
                            key={onecert.id}
                            className={styles.certification__wrapper__body}
                        >
                            <div className={styles.cert_icon}>
                                <Image
                                    src={onecert.image_url}
                                    alt="iso badge"
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <h6>{onecert.name}</h6>
                            <p>{onecert.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No certifications found.</p>
                )}
            </div>
        </section>
    );
};
