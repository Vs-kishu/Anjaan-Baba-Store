import styles from "./Hero.module.css";

import heroBaba from "../../assets/babaBanner.png";
import { Link } from "react-router-dom";
import { useIsMobile } from "../../hooks";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.heroBg}>
      <div className={`container ${styles.hero}`}>
        <article className={styles.content}>
          <h1>Anjaan Store - Your Electronic Haven</h1>

          <p>
            Discover a world of cutting-edge electronics at Anjaan Store. From
            the latest gadgets to top-notch appliances, we've got it all. Shop
            with confidence and experience unmatched quality and service in the
            world of electronics.
          </p>

          <Link to="/products" className={`btn ${styles.btnHero}`}>
            Shop now
          </Link>
        </article>

        {!isMobile && (
          <article className={styles.imageContainer}>
            <img src={heroBaba} alt="Anjaan baba" className={styles.banner} />
          </article>
        )}
      </div>
    </section>
  );
};

export default Hero;
