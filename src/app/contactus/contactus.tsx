import Image from 'next/image';
import contactImage from '../../../public/images/contact/Mask Group 6@2x.png';

import styles from './contactus.module.scss';

export const ContactUs = () => {
  return (
    <div className={styles.contact_us}>
      <div className={styles.contact_us__image}>
        <Image src={contactImage} alt="" />
      </div>
      <div className={styles.contact_us__form}>
        <h5>WRITE US FOR ANY INQUIRY.</h5>
        <form action="">
          <div className={styles.form_group}>
            <input placeholder="Full Name" type="text" name="" id="" />
            <input placeholder="Email Address" type="text" />
            <input placeholder="Country" type="text" name="" id="" />
            <input placeholder="Mobile Numeber" type="text" name="" id="" />
          </div>
          <textarea placeholder="Message" name="" id="" rows={4}></textarea>
          <button type="submit" className={styles.submit}>
            Submit
          </button>
        </form>
        <div className={styles.address}>
          <div className={styles.address__details}>
            <h6>ADDRESS</h6>
            <p><span>&#40;</span> Egypt, Cairo <span>&#41;</span></p>
          </div>
          <div className={styles.address__details}>
            <h6>WHATSAPP</h6>
            <p>
              <u>+94114 792 900</u>{' '}
            </p>
          </div>
          <div className={styles.address__details}>
            <h6>EMAIL</h6>
            <p>
              <u>hussain@cupofchange-eg.com</u>
            </p>
          </div>
          <div className={styles.address__details}>
            <h6>Mobile Phone</h6>
            <div >
              <u>+20 1000474744</u> {' '}
              <u>+94 76 333 2979</u>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
