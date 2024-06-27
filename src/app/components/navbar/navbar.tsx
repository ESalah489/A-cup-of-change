// "use client";

// import Link from "next/link";
// import styles from "./navbar.module.scss";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// type Brand = {
//     brand_name: string;
// };
// export const Navbar = () => {
//     const pathname = usePathname();

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
//                 setBrand(data.data);
//             } else {
//                 console.error("Empty response received");
//             }
//         } catch (error) {
//             console.error("Error fetching settings:", error);
//         }
//     };

//     useEffect(() => {
//         fetchBrand();
//     }, []);

//     return (
//         <nav
//             className={`${
//                 (pathname === "/contactus" ||
//                     pathname === "/manufacturing" ||
//                     pathname === "/our-selection" ||
//                     pathname === "/our-brands") &&
//                 styles.contact_page
//             } ${styles.nav}`}
//         >
//             <div className={`${styles.logo}`}>
//                 {brand && (
//                     <Link href="./">
//                         <h1>{brand.brand_name}</h1>
//                     </Link>
//                 )}
//             </div>
//             <ul className={`${styles.nav__list}`}>
//                 <li className={`${styles.nav__list__item}`}>
//                     <Link
//                         className={`${pathname === "/" && styles.active_item}`}
//                         href="./"
//                     >
//                         Home
//                     </Link>
//                 </li>
//                 <li className={`${styles.nav__list__item}`}>
//                     <Link
//                         className={`${
//                             pathname === "/about" && styles.active_item
//                         }`}
//                         href="about"
//                     >
//                         About us
//                     </Link>
//                 </li>
//                 <li className={`${styles.nav__list__item}`}>
//                     <Link
//                         className={`${
//                             pathname === "/thanks" && styles.active_item
//                         }`}
//                         href="thanks"
//                     >
//                         Thanks
//                     </Link>
//                 </li>
//                 <li className={`${styles.nav__list__item}`}>
//                     <Link
//                         className={`${
//                             pathname === "/manufacturing" && styles.active_item
//                         }`}
//                         href="manufacturing"
//                     >
//                         Manufaturing & Certifications
//                     </Link>
//                 </li>
//                 <li className={`${styles.nav__list__item}`}>
//                     <Link
//                         className={`${
//                             pathname === "/our-selection" && styles.active_item
//                         }`}
//                         href="our-selection"
//                     >
//                         Teas
//                     </Link>
//                 </li>
//                 <li className={`${styles.nav__list__item}`}>
//                     <Link
//                         className={`${
//                             pathname === "/our-brands" && styles.active_item
//                         }`}
//                         href="our-brands"
//                     >
//                         Our Brands
//                     </Link>
//                 </li>
//                 <li
//                     className={`${styles.nav__list__item} ${styles.nav__list__btn}`}
//                 >
//                     <Link
//                         className={`${
//                             pathname === "/contactus" && styles.active_item
//                         }`}
//                         href="contactus"
//                     >
//                         Contact us
//                     </Link>
//                 </li>
//                 <li
//                     className={`${styles.nav__list__item} ${styles.nav__list__lang_switch}`}
//                 >
//                     <a href="#!">EN</a>
//                 </li>
//             </ul>
//         </nav>
//     );
// };
"use client";

import Link from "next/link";
import styles from "./navbar.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Brand = {
    brand_name: string;
};

export const Navbar = () => {
    const pathname = usePathname();
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
                setBrand({ brand_name: data.data.brand_name });
            } else {
                console.error("Empty response received");
            }
        } catch (error) {
            console.error("Error fetching settings:", error);
        }
    };

    useEffect(() => {
        fetchBrand();
    }, []);

    return (
        <nav
            className={`${(pathname === "/contactus" || pathname === "/manufacturing" || pathname === "/our-selection" || pathname === "/our-brands") && styles.contact_page} ${styles.nav}`}
        >
            <div className={`${styles.logo}`}>
                {brand && (
                    <Link href="./">
                        <h1>{brand.brand_name}</h1>
                    </Link>
                )}
            </div>
            <ul className={`${styles.nav__list}`}>
                <li className={`${styles.nav__list__item}`}>
                    <Link
                        className={`${pathname === "/" && styles.active_item}`}
                        href="./"
                    >
                        Home
                    </Link>
                </li>
                <li className={`${styles.nav__list__item}`}>
                    <Link
                        className={`${pathname === "/about" && styles.active_item}`}
                        href="about"
                    >
                        About us
                    </Link>
                </li>
                <li className={`${styles.nav__list__item}`}>
                    <Link
                        className={`${pathname === "/thanks" && styles.active_item}`}
                        href="thanks"
                    >
                        Thanks
                    </Link>
                </li>
                <li className={`${styles.nav__list__item}`}>
                    <Link
                        className={`${pathname === "/manufacturing" && styles.active_item}`}
                        href="manufacturing"
                    >
                        Manufacturing & Certifications
                    </Link>
                </li>
                <li className={`${styles.nav__list__item}`}>
                    <Link
                        className={`${pathname === "/our-selection" && styles.active_item}`}
                        href="our-selection"
                    >
                        Teas
                    </Link>
                </li>
                <li className={`${styles.nav__list__item}`}>
                    <Link
                        className={`${pathname === "/our-brands" && styles.active_item}`}
                        href="our-brands"
                    >
                        Our Brands
                    </Link>
                </li>
                <li className={`${styles.nav__list__item} ${styles.nav__list__btn}`}>
                    <Link
                        className={`${pathname === "/contactus" && styles.active_item}`}
                        href="contactus"
                    >
                        Contact us
                    </Link>
                </li>
                <li className={`${styles.nav__list__item} ${styles.nav__list__lang_switch}`}>
                    <a href="#!">EN</a>
                </li>
            </ul>
        </nav>
    );
};

