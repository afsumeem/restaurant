import { useSwiper } from "swiper/react";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";

const SliderNavigation = () => {
  const swiper = useSwiper();

  const handlePrevClick = () => {
    swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiper.slideNext();
  };

  return (
    <div className="navigationContainer flex gap-8 justify-center mx-auto mt-4">
      {/* prev arrow */}

      <button
        onClick={handlePrevClick}
        className="bg-white-solid w-[40px] h-[40px] rounded-full shadow-navigation-arrow flex items-center justify-center lg:h-[60px] lg:w-[60px] "
      >
        <img src={leftArrow} alt="" className="h-[11px] w-[19px] " />
      </button>

      {/* next arrow */}
      <button
        onClick={handleNextClick}
        className="bg-white-solid w-[40px] h-[40px] rounded-full shadow-navigation-arrow flex items-center justify-center lg:h-[60px] lg:w-[60px] "
      >
        <img
          src={rightArrow}
          alt=""
          className="h-[7px] w-[12px] lg:h-[11px] lg:w-[19px] "
        />
      </button>
    </div>
  );
};

export default SliderNavigation;
