/* eslint-disable react/prop-types */
// import { useSwiper } from "swiper/react";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";

const SliderNavigation = ({ swiper }) => {
  // const swiper = useSwiper();

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiper) swiper.slideNext();
  };

  return (
    <div className="navigationContainer flex gap-8  justify-center mx-auto  ">
      {/* prev arrow */}

      <button
        onClick={handlePrevClick}
        className="bg-white-solid w-[40px] h-[40px] rounded-full shadow-navigation-arrow flex items-center justify-center lg:h-[60px] lg:w-[60px] p-[10px]"
      >
        <img
          src={leftArrow}
          alt=""
          className=" max-w-[7.18px] max-h-[12.47px] lg:h-[11px] lg:w-[19px] "
        />
      </button>

      {/* next arrow */}
      <button
        onClick={handleNextClick}
        className="bg-white-solid w-[40px] h-[40px] rounded-full shadow-navigation-arrow flex items-center justify-center lg:h-[60px] lg:w-[60px] p-[10px]"
      >
        <img
          src={rightArrow}
          alt=""
          className="max-w-[7.18px] max-h-[12.47px] lg:h-[11px] lg:w-[19px] "
        />
      </button>
    </div>
  );
};

export default SliderNavigation;
