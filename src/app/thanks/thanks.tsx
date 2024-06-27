
"use client";
import React from "react";
import Image from "next/image";
import styles from "./thanks.module.scss";
import { useEffect, useState } from "react";

type Thanks = {
    thank_you_message: string;
    thank_you_page_image: string;
};
export const thanks = () => {
    const [thanks, setThanks] = useState<Thanks | null>(null);
    const fetchThanks = async () => {
        try {
            const response = await fetch(
                "https://cupofchange-eg.com/dashboard/api/settings"
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            if (data && data.data) {
                setThanks({
                    thank_you_message: data.data.thank_you_message,
                    thank_you_page_image: data.data.thank_you_page_image,
                });
            } else {
                console.error("Empty response received");
            }
        } catch (error) {
            console.error("Error fetching Brand:", error);
        }
    };

    useEffect(() => {
        fetchThanks();
    }, []);
    return (
        <React.Fragment>
        <div className={styles.about_wrapper}>
            <div className={styles.hero}>
            {thanks && (
                <>
                <div className={styles.hero__content}>
                    <h2 className={styles.hero__content__title}>
                        Thank you for getting in touch with us
                    </h2>
                    <p className={styles.hero__content__desc}>
                        {thanks.thank_you_message}
                    </p>
                </div>
                <div className={styles.hero__img}>
                    <Image src={thanks.thank_you_page_image} alt=""  width={550} height={550} />
                </div>
                </>
                )}
            </div>
        </div>
        </React.Fragment>
    );
};

export default thanks;
