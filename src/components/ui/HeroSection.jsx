import styles from "../../styles/HeroSection.module.css";
import heroImage from "/src/assets/banner-image.png";
import star from "/src/assets/star.svg";
import offer from "/src/assets/offer.svg";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero2}>
        <div className="w-[1320px] h-[650px] flex mx-auto">
          <div className="  pt-24  z-10 ">
            <div className={styles.heroSectionTitle}>
              <h2 className="text-[120px] text-white-solid">
                Taste the authentic <br /> Saudi cuisine
              </h2>
            </div>

            <p className="text-white-solid font-normal text-2xl">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <button>Explore Menu</button>
          </div>
          {/* hero-section image */}
          <div className="relative ">
            <img
              src={heroImage}
              alt="hero-image "
              className="rotate-360	w-[751px] h-[649px] "
            />
            <img
              src={star}
              alt="banner-star"
              className="absolute -top-8 -right-6 h-[45px] w-[45px]"
            />
            <img
              src={offer}
              alt="offer-image"
              className="absolute -bottom-[13px] -right-14 h-[120px] w-[120px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
