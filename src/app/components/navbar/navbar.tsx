"use client";

import Link from "next/link";
import styles from "./navbar.module.scss";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav
            className={`${
                (pathname === "/contactus" ||
                    pathname === "/manufacturing" ||
                    pathname === "/our-selection" ||
                    pathname === "/our-brands") &&
                styles.contact_page
            } ${styles.nav}`}
        >
            <div className={`${styles.logo}`}>
                <Link href="./">
                    <h1>A cup of change</h1>
                </Link>
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
                        className={`${
                            pathname === "/about" && styles.active_item
                        }`}
                        href="about"
                    >
                        About us
                    </Link>
                </li>
                <li className={`${styles.nav__list__item}`}>
                    <Link
                        className={`${
                            pathname === "/thanks" && styles.active_item
                        }`}
                        href="thanks"
                    >
                        Thanks
                    </Link>
                </li>
                <li className={`${styles.nav__list__item}`}>
                    <Link
                        className={`${
                            pathname === "/manufacturing" && styles.active_item
                        }`}
                        href="manufacturing"
                    >
                        Manufaturing & Certifications
                    </Link>
                </li>
                <li className={`${styles.nav__list__item}`}>
                    <Link
                        className={`${
                            pathname === "/our-selection" && styles.active_item
                        }`}
                        href="our-selection"
                    >
                        Teas
                    </Link>
                </li>
                <li className={`${styles.nav__list__item}`}>
                    <Link
                        className={`${
                            pathname === "/our-brands" && styles.active_item
                        }`}
                        href="our-brands"
                    >
                        Our Brands
                    </Link>
                </li>
                <li
                    className={`${styles.nav__list__item} ${styles.nav__list__btn}`}
                >
                    <Link
                        className={`${
                            pathname === "/contactus" && styles.active_item
                        }`}
                        href="contactus"
                    >
                        Contact us
                    </Link>
                </li>
                <li
                    className={`${styles.nav__list__item} ${styles.nav__list__lang_switch}`}
                >
                    <a href="#!">EN</a>
                </li>
            </ul>
        </nav>
    );
};
