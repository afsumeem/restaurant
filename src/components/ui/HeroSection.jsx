import styles from "../../styles/HeroSection.module.css";
import star from "/src/assets/star.svg";
import offer from "/src/assets/offer.svg";

const HeroSection = () => {
  return (
    <div
      className={`w-full h-auto lg:h-[1047px] -mt-[77px] lg:-mt-[90px] xl:-mt-[108px]
        ${styles.hero} overflow-hidden`}
    >
      <div
        className={`h-full w-full py-[30px] lg:py-0 ${styles.hero2} flex items-center justify-center`}
      >
        <div className="w-full lg:w-[90%] xl:w-[1320px] h-full lg:h-[650px] flex flex-col lg:flex-row gap-y-12 mx-auto mt-[77px] lg:mt-[108px] px-7 lg:px-0 ">
          {/* hero section content */}

          <div className=" py-0 lg:py-8 lg:pt-24  z-10 h-full lg:h-[446px] w-full lg:w-[830px]">
            {/*  */}
            <div className={` ${styles.heroSectionTitle} h-auto xl:h-[272px] `}>
              <h1 className="text-5xl md:text-[80px] lg:text-[100px] xl:text-[120px] text-white-solid leading-[56px] md:leading-[90px] lg:leading-[130px] pt-0 lg:pt-5 font-medium uppercase">
                Taste the authentic <br /> Saudi cuisine
              </h1>
            </div>

            <p className="text-white-solid font-extralight text-xl lg:text-2xl w-full lg:w-[500px] xl:w-[559px] mt-4 lg:mt-8 leading-7 lg:leading-8 ">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <button className="mt-4 lg:mt-10 transition duration-300 ease-in-out transform  hover:scale-105 hover:shadow-lg">
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
              className="rotate-360 w-full h-[310px] md:h-[500px]	lg:w-[700px] lg:h-[649px] z-[2]"
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
