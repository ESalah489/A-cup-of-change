// "use client";

// import Image from "next/image";
// import styles from "./page.module.scss";

// import logo from "../../public/images/Group 16.svg";
// import { AboutSection } from "./components/Homepage/AboutSection/AboutSection";
// import { CategoriesSection } from "./components/Homepage/CategoriesSection/CategoriesSection";

// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// type Brand = {
//     title: string;
//     subtitle: string;
//     logo: string;
// };
// export default function Home() {
//     const [brand, setBrand] = useState<Brand | null>(null);

//     const fetchBrand = async () => {
//         try {
//             const response = await fetch(
//                 "https://cupofchange-eg.com/dashboard/api/settings"
//             );
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             const data = await response.json();
//             if (data && data.data && data.data.length > 0) {
//                 setBrand(data.data[0]);
//             } else {
//                 console.error("Empty response received");
//             }
//         } catch (error) {
//             console.error("Error fetching Brand:", error);
//         }
//     };
//     useEffect(() => {
//         fetchBrand();
//     }, []);
//     return (
//         <div className={`${styles.wrapper}`}>
//             <div className={`${styles.hero}`}>
//                 <div className={`${styles.hero__body}`}>
//                     {brand && (
//                         <>
//                             <div className={`${styles.hero__body__img}`}>
//                                 <Image
//                                     src={brand.logo}
//                                     lang="responsive"
//                                     alt="logo"
//                                 />
//                             </div>
//                             <div className={`${styles.hero__body__content}`}>
//                                 <div
//                                     className={`${styles.hero__body__content__title}`}
//                                 >
//                                     {brand.title}
//                                 </div>
//                                 <div
//                                     className={`${styles.hero__body__content__desc}`}
//                                 >
//                                     From Akbar Brothers Tea Ceylon And Ranfer
//                                     Teas Kenya. Elevate Your Business With
//                                     Premium Blends From The Best Tea Gardens.
//                                 </div>
//                                 <div
//                                     className={`${styles.hero__body__content__cta}`}
//                                 >
//                                     Know more
//                                 </div>
//                             </div>
//                         </>
//                     )}
//                 </div>
//             </div>

//             <AboutSection />
//             <CategoriesSection />
//         </div>
//     );
// }

"use client";

import Image from "next/image";
import styles from "./page.module.scss";

import { AboutSection } from "./components/Homepage/AboutSection/AboutSection";
import { CategoriesSection } from "./components/Homepage/CategoriesSection/CategoriesSection";

import { useEffect, useState } from "react";

type Brand = {
    title: string;
    subtitle: string;
    logo: string;
};

export default function Home() {
    const [brand, setBrand] = useState<Brand | null>(null);

    const fetchBrand = async () => {
        try {
            const response = await fetch("https://cupofchange-eg.com/dashboard/api/settings");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            if (data && data.data) {
                setBrand({
                    title: data.data.title,
                    subtitle: data.data.subtitle,
                    logo: data.data.logo,
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
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.hero}`}>
                <div className={`${styles.hero__body}`}>
                    {brand && (
                        <>
                            <div className={`${styles.hero__body__img}`}>
                                <Image
                                    src={brand.logo}
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    alt="logo"
                                />
                            </div>
                            <div className={`${styles.hero__body__content}`}>
                                <div className={`${styles.hero__body__content__title}`}>
                                    {brand.title}
                                </div>
                                <div className={`${styles.hero__body__content__desc}`}>
                                    {brand.subtitle}
                                </div>
                                <div className={`${styles.hero__body__content__cta}`}>
                                    Know more
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <AboutSection />
            <CategoriesSection />
        </div>
    );
}

