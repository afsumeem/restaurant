import styles from "../../styles/HeroSection.module.css";
import star from "/src/assets/star.svg";
import offer from "/src/assets/offer.svg";

const HeroSection = () => {
  return (
    <div
      className={`w-full h-auto lg:h-[1047px] -mt-[77px] lg:-mt-[108px]
        ${styles.hero} overflow-hidden `}
    >
      <div
        className={`h-full w-full pt-[77px] lg:pt-[108px] pb-[30px] lg:pb-[160px]  ${styles.hero2} flex items-center justify-center`}
      >
        <div className="w-full lg:w-[90%] xl:w-[1320px] h-full lg:h-[649px] flex flex-col lg:flex-row gap-y-12 mx-auto mt-8 lg:mt-[130px] px-[30px] lg:px-0 ">
          {/* hero section content */}

          <div className="lg:pt-[104px]  z-10 h-full lg:h-[446px] w-full lg:w-[830px]">
            {/*  */}
            <div className={` ${styles.heroSectionTitle} h-auto xl:h-[272px] `}>
              <h1 className="text-5xl md:text-[100px] lg:text-[100px] xl:text-[120px] text-white-solid leading-[56px] md:leading-[90px] lg:leading-[130px] pt-0 lg:pt-5 font-bold uppercase">
                Taste the authentic <br /> Saudi cuisine
              </h1>
            </div>

            <p className="text-white-solid font-normal text-xl md:text-2xl w-full lg:w-[500px] xl:w-[559px] mt-4  leading-7 lg:leading-8 ">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <button className="w-[152.8px] h-[48.2px] py-[13.6px] px-[20.4px] lg:w-[180px] lg:h-[56px] lg:py-4 text-[15.3px] lg:text-lg lg:px-6 leading-[20.4px] mt-8 lg:mt-[38px] transition duration-300 ease-in-out transform  hover:scale-105 hover:shadow-lg text-center">
              Explore Menu
            </button>
          </div>

          {/* hero-section image */}
          <div className="relative ml-0 lg:-ml-52">
            <img
              src={star}
              alt="banner-star"
              className="absolute -top-4 right-0  lg:-top-8 lg:-right-6 h-[45px] w-[45px] z-[1]"
            />
            <img
              src="https://res.cloudinary.com/dghf2lzu3/image/upload/v1731246754/restaurant/banner-image_dbavkd.png"
              alt="hero-image "
              className="rotate-360 w-full h-full md:h-full	lg:w-[700px] lg:h-[649px] z-[2]"
            />

            <img
              src={offer}
              alt="offer-image"
              className="absolute bottom-0 right-1 lg:-bottom-[13px] xl:-right-7 2xl:-right-14 h-[72px] w-[72px] lg:h-[120px] lg:w-[120px] z-[3]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
