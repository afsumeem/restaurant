import styles from "../../styles/HeroSection.module.css";
import heroImage from "/src/assets/banner-image.png";
import star from "/src/assets/star.svg";
import offer from "/src/assets/offer.svg";

const HeroSection = () => {
  return (
    <div
      className={`h-[715px] lg:h-[1047px] -mt-[77px] lg:-mt-[108px] ${styles.hero}`}
    >
      <div
        className={`h-full w-full px-[30px] py-8 lg:p-[160px] ${styles.hero2} flex items-center justify-center`}
      >
        <div className="w-[390px] lg:w-[1320px] h-[650px] flex flex-col lg:flex-row mx-auto mt-[77px] lg:mt-[108px] ">
          {/* hero section content */}

          <div className=" py-0 lg:py-8 lg:pt-24  z-10 h-[292px] lg:h-[446px] w-full lg:w-[830px]">
            {/*  */}
            <div className={` ${styles.heroSectionTitle}`}>
              <h2 className="text-5xl lg:text-[120px] text-white-solid leading-[56px] lg:leading-[130px] pt-0 lg:pt-5 font-medium uppercase">
                Taste the authentic <br /> Saudi cuisine
              </h2>
            </div>

            <p className="text-white-solid font-extralight text-xl lg:text-2xl w-[330px] lg:w-[559px] mt-4 lg:mt-8 leading-7 lg:leading-8 ">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <button className="mt-4 lg:mt-10 ">Explore Menu</button>
          </div>

          {/* hero-section image */}
          <div className="relative ml-0 lg:-ml-52">
            <img
              src={star}
              alt="banner-star"
              className="absolute -top-4 right-0  lg:-top-8 lg:-right-6 h-[45px] w-[45px] z-[1]"
            />
            <img
              src={heroImage}
              alt="hero-image "
              className="rotate-360 w-full h-[310px]	lg:w-[700px] lg:h-[649px] z-[2]"
            />

            <img
              src={offer}
              alt="offer-image"
              className="absolute bottom-0 right-1 lg:-bottom-[13px] lg:-right-14 h-[72px] w-[72px] lg:h-[120px] lg:w-[120px] z-[3]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
