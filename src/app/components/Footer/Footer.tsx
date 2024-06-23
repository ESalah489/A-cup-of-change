'use client';
import Image from 'next/image';
import styles from './Footer.module.scss';
import logo from '../../../../public/images/Group 16.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer id={styles.footer}>
      <div className={styles.footer_body}>
        <div className={styles.logo}>
          <Image src={logo} alt="site logo" />
        </div>
        <div>
          <ul>
            <li className={styles.list_title}>About Cup of change</li>
            <li>Cup of change</li>
            <li>Sustainability</li>
            <li>Ceylon Tea</li>
            <li>Manufacturing</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={styles.list_title}>Useful Links</li>
            <li>
              <Link
                className={`${pathname === '/' && styles.active_item}`}
                href="./"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname === '/' && styles.active_item}`}
                href="about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname === '/' && styles.active_item}`}
                href="our-brands"
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname === '/' && styles.active_item}`}
                href="contactus"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={styles.list_title}>Follow Us</li>
            <li>Facebook</li>
            <li>Instgram</li>
            <li>Youtube</li>
            <li>Linked in</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className={styles.signup}>
          <div className={styles.signup__title}>
            <h6>SIGN UP FOR OUR NEWSLETTER</h6>
            <p>Join us on a journey as memorable as our teas.</p>
          </div>
          <div className={styles.signup__input}>
            <input placeholder="Enter Your Email" type="text" name="" id="" />
            <button className="oo">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.languages}>
          <p>
            Languages: <a className={styles.languages__lang}>EN </a>
            <a className={styles.languages__lang}>AR </a>
          </p>
        </div>

        <a className={styles.privacy} href="#!">
          Privacy Policy
        </a>
        <p className={styles.copyrights}>
          CUP OF CHANGE - ©2024 All rights reserved.
        </p>
      </div>
    </footer>
  );
};
