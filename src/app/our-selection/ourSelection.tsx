import Image from "next/image";

import styles from "./ourSelection.module.scss";
import img1 from "../../../public/images/our-selection/6-2@2x.png";
import img2 from "../../../public/images/our-selection/6-3@2x.png";
import img3 from "../../../public/images/our-selection/6@2x.png";
import img6 from "../../../public/images/our-selection/6-1@2x.png";

export const OurSelection = () => {
    return (
        <div className={styles.our_selection}>
            <div className={styles.our_selection__hero}>
                <h4>Teas</h4>
                <p>
                    Your B2B Supplier, For Bulk Tea And Private Labelling Ceylon
                    And Kenyan Teas.
                </p>
            </div>

            <div className={styles.ceylon_tea_kinds}>
                <h4>Our Type Of Tea</h4>
                <div className={styles.kind}>
                    <div className={styles.kind__image}>
                        <Image src={img3} alt="" />
                    </div>
                    <div className={styles.kind__body}>
                        <h5>Black Tea</h5>
                        <p>
                            Akbar Brothers diverse black tea range, including
                            grades such as Dust, BOP, BOPF, and OP, each
                            offering a unique cup color and flavor profile. The
                            Dust grade creates a deep, dark infusion, ideal for
                            a strong and invigorating cup. BOP infuses into a
                            rich amber hue, delivering a robust and full-bodied
                            taste. BOPF brews into a brisk golden cup, perfect
                            for a refreshing experience. And, OP, with its
                            coppery liquor, offers a smooth and aromatic flavor.
                            Explore Akbar Brothers &apos; black tea range to
                            find your preferred cup color and flavor intensity.
                        </p>
                    </div>
                </div>
                <div className={styles.kind}>
                    <div className={styles.kind__image}>
                        <Image src={img1} alt="" />
                    </div>
                    <div className={styles.kind__body}>
                        <h5>Green Tea</h5>
                        <p>
                            Akbar Brothers presents a captivating range of green
                            teas, sourced from Sri Lanka&apos;s finest gardens
                            and meticulously crafted to preserve their delicate
                            flavors and health benefits. Our green tea range
                            includes popular varieties like Gunpowder and
                            Sencha, each offering a unique taste profile and
                            aroma. Packed with antioxidants and natural
                            goodness, our green teas are perfect for
                            health-conscious consumers looking for a refreshing
                            and revitalizing beverage option.
                        </p>
                    </div>
                </div>
                <div className={styles.kind}>
                    <div className={styles.kind__image}>
                        <Image src={img6} alt="" />
                    </div>
                    <div className={styles.kind__body}>
                        <h5>Flavored Tea </h5>
                        <p>
                            Akbar Brothers presents a tantalizing range of
                            flavored black and green teas. Our flavored black
                            teas include classics like Earl Grey and Chai, as
                            well as fruit-infused varieties like raspberry and
                            mango. In the green tea collection, discover
                            refreshing options like Green Mint and Green
                            Jasmine, or indulge in the tropical flavors of Green
                            Tropical Fruit. Each blend offers a delightful
                            twist, elevating your tea experience with
                            captivating flavors and aromas.
                        </p>
                    </div>
                </div>
                <div className={styles.kind}>
                    <div className={styles.kind__image}>
                        <Image src={img2} alt="" />
                    </div>
                    <div className={styles.kind__body}>
                        <h5>Herbal infusions</h5>
                        <p>
                            Akbar Brothers presents a soothing and aromatic
                            herbal infusion range, crafted to rejuvenate your
                            senses. Explore our collection featuring chamomile,
                            peppermint, and fruity blends, each carefully
                            selected for their natural flavors and wellness
                            benefits. Our caffeine-free herbal infusions are
                            perfect for relaxation and unwinding, offering a
                            comforting and flavorful tea experience that
                            promotes well-being and tranquility.
                        </p>
                    </div>
                </div>
                <div className={styles.kind}>
                    <div className={styles.kind__image}>
                        <Image src={img1} alt="" />
                    </div>
                    <div className={styles.kind__body}>
                        <h5>Ice Tea</h5>
                        <p>
                            Akbar Brothers introduces a refreshing Ice Tea
                            range, designed to cool your day. Our selection
                            includes classic lemon, peach, and tropical fruit
                            blends, each crafted with premium tea leaves and
                            natural flavors for a deliciously refreshing taste.
                            Perfect for hot days or as a revitalizing pick-me-up
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
