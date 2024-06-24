import React from "react";
import Image from "next/image";
import aboutIntro from "../../../public/images/about/about-intro.jpg";
import styles from "./thanks.module.scss";
export const thanks = () => {
    return (
        <React.Fragment>
        <div className={styles.about_wrapper}>
            <div className={styles.hero}>
                <div className={styles.hero__content}>
                    <h2 className={styles.hero__content__title}>
                        Thank you for getting in touch with us
                    </h2>
                    <p className={styles.hero__content__desc}>
                        Thanks for being awesome! We have received your message
                        and will get back to you as soon as possible.
                    </p>
                </div>
                <div className={styles.hero__img}>
                    <Image src={aboutIntro} alt="" />
                </div>
            </div>
        </div>
        </React.Fragment>
    );
};

export default thanks;
