"use client";
import Image from "next/image";
import styles from "./AboutScreen.module.scss";
import { useEffect, useState } from "react";
type Award = {
    id: number;
    name: string;
    date: string;
    image_url: string;
};

type About = {
    ceylon_brief: string;
    ceylon_logo: string;
    ceylon_person_image: string;
    ceylon_cover: string;
    ceylon_image: string;
    kenyan_description: string;
    ceylon_description_two: string;
    ceylon_description_one:string;
    kenyan_cover:string;
    about_us_heading:string;
    about_us_description:string;
    about_us_page_image:string;
};
export const AboutScreen = () => {
    const [award, setAward] = useState<Award[]>([]);

    const fetchBrand = async () => {
        try {
            const response = await fetch(
                "https://cupofchange-eg.com/dashboard/api/awards"
            );
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

    const [about, setAbout] = useState<About | null>(null);

    const fetchAbout = async () => {
        try {
            const response = await fetch(
                "https://cupofchange-eg.com/dashboard/api/settings"
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            if (data && data.data) {
                setAbout({
                    ceylon_brief: data.data.ceylon_brief,
                    ceylon_logo: data.data.ceylon_logo,
                    ceylon_person_image: data.data.ceylon_person_image,
                    ceylon_cover: data.data.ceylon_cover,
                    ceylon_image: data.data.ceylon_image,
                    kenyan_description: data.data.kenyan_description,
                    ceylon_description_two: data.data.ceylon_description_two,
                    ceylon_description_one: data.data.ceylon_description_one,
                    kenyan_cover: data.data.kenyan_cover,
                    about_us_heading: data.data.about_us_heading,
                    about_us_description: data.data.about_us_description,
                    about_us_page_image: data.data.about_us_page_image,
                });
            } else {
                console.error("Empty response received");
            }
        } catch (error) {
            console.error("Error fetching Brand:", error);
        }
    };

    useEffect(() => {
        fetchAbout();
    }, []);
    return (
        <div className={styles.about_wrapper}>
          {about && (
                  <>
            <div className={styles.hero}>
                <div className={styles.hero__content}>
                    <h2 className={styles.hero__content__title}>
                      {
                        about.about_us_heading
                      }
                    </h2>
                    <p
                    dangerouslySetInnerHTML={{
                      __html: about.about_us_description,
                    }}
                    className={styles.hero__content__desc}
                  ></p>
                </div>
                <div className={styles.hero__img}>
                    <Image src={about.about_us_page_image} alt="" layout="responsive" width={0} height={0} />
                </div>
            </div>
            {/* <div className={styles.about_wrapper__founded}>
                <p>
                    Founded In 1969 By The Visionary Akbarally Brothers Abbas
                    And Inayet, Akbar Brothers (Pvt) Limited Has Become
                    Synonymous With Excellence In The Tea Industry. Their
                    Forward-Thinking Approach Led Them To Revolutionize Tea Bag
                    Production Through Advanced Machinery And To Develop Robust
                    Warehousing Capabilities To Meet The Growing Global Demand.
                    As The Largest Tea Company In Sri Lanka, They Have Held The
                    Prestigious Title Of The Worlds Largest Exporter Of Ceylon
                    Tea For An Impressive 30 Consecutive Years. Their Commitment
                    To Quality Is Unmatched, With Every Consignment Of Akbar Tea
                    Personally Approved By A Family Member Before Shipment,
                    Ensuring Exceptional Standards And Reliability. Akbar
                    Brothers Global Footprint Extends To Over 90 Nations, Making
                    Their Premium Ceylon Tea A Favorite Among Millions Of Tea
                    Enthusiasts Worldwide. At Cup Of Change, We Take Pride In
                    Carrying Forward Our Family Legacy Of Excellence And
                    Innovation Representing Akbar Brothers (Pvt) Limited In
                    Egypt. Our Curated Selection Of Premium Teas And Brands
                    Reflects Our Deep Understanding Of Tea Traditions And
                    Commitment To Quality, Sustainability And Authenticity.
                </p>
            </div> */}
            </>)}
            <div className={styles.akbar_brand}>
                <h2 className={styles.title}>THE AKBAR BRAND</h2>
                {award.map((oneaward) => (
                    <div
                        className={styles.akbar_brand__content}
                        key={oneaward.id}
                    >
                        <div className={styles.akbar_brand__content__img}>
                            <Image
                                src={oneaward.image_url}
                                alt=""
                                width={400}
                                height={500}
                            />
                        </div>
                        <div className={styles.akbar_brand__content__tabs}>
                            <div
                                className={
                                    styles.akbar_brand__content__tabs__tab
                                }
                            >
                                <div
                                    className={
                                        styles.akbar_brand__content__tabs__tab__text
                                    }
                                >
                                    <p>{oneaward.name}</p>
                                </div>
                                <div
                                    className={
                                        styles.akbar_brand__content__tabs__tab__date
                                    }
                                >
                                    <p>{oneaward.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.ceylon_tea}>
                {about && (
                    <>
                        <div className={styles.ceylon_tea__head}>
                            <div className={styles.ceylon_logo}>
                            <Image src={about.ceylon_logo} alt="ceylon logo"  width={167} height={127} />
                            </div>
                            <div className={styles.ceylon_tea__head__text}>
                                <h3>CEYLON TEA</h3>
                                <p>
                                    {about.ceylon_brief}
                                </p>
                            </div>
                        </div>
                        <div className={styles.ceylon_tea__bg}>
                            <Image src={about.ceylon_cover} alt="1366 pic" layout="responsive" width={0} height={0} />
                        </div>
                    </>
                )}
                {about && (
                  <>
                <div className={styles.ceylon_tea__brief}>
                    <div className={styles.ceylon_tea__brief__body}>
                        <div className={styles.ceylon_tea__brief__body__img}>
                            <Image
                                src={about.ceylon_person_image}
                                layout="responsive"
                                alt="tailer"
                                width={0} height={0}
                            />
                        </div>

                        <div
                            className={styles.ceylon_tea__brief__body__history}
                        >
                           <p>{about.ceylon_description_one}</p>
                            <div className={styles.persons}>
                                <Image
                                    src={about.ceylon_image}
                                    layout="responsive"
                                    alt="persons"
                                    width={0} height={0}
                                />
                            </div>
                            <p>
                                {about.ceylon_description_two}
                            </p>
                        </div>
                    </div>
                    <div className={styles.kenyan_tea}>
                        <h3>KENYAN TEA</h3>
                        <p>
                            {about.kenyan_description}
                        </p>
                    </div>
                </div>
                
                <div className={styles.farmers}>
                <Image src={about.kenyan_cover} alt=""  width={0} height={0} layout="responsive"/>
                </div>
                </>
                )}
            </div>
        </div>
    );
};

export default AboutScreen;
