import styles from "../../styles/HeroSection.module.css";
import heroImage from "/src/assets/banner-image.png";
import star from "/src/assets/star.svg";
import offer from "/src/assets/offer.svg";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div
        className={`h-[1047px] p-[160] ${styles.hero2} flex items-center justify-center`}
      >
        <div className="w-[1320px] h-[650px] flex mx-auto  mt-[108px]">
          <div className="  pt-24  z-10 h-[446px] w-[830px]">
            <div className={styles.heroSectionTitle}>
              <h2 className="text-[120px] text-white-solid leading-[130px]">
                Taste the authentic <br /> Saudi cuisine
              </h2>
            </div>

            <p className="text-white-solid font-normal text-2xl w-[559px] mt-8 leading-8 ">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <button className="mt-10">Explore Menu</button>
          </div>
          {/* hero-section image */}
          <div className="relative -ml-52">
            <img
              src={heroImage}
              alt="hero-image "
              className="rotate-360	w-[700px] h-[649px] "
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
