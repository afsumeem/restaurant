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
    <div className="navigationContainer flex justify-end  gap-8">
      <button
        onClick={handlePrevClick}
        className="bg-inherit w-[40px] h-[40px] rounded-full shadow-navigation-arrow flex items-center justify-center lg:h-[60px] lg:w-[60px] "
      >
        <img
          src={leftArrow}
          alt=""
          className="h-[7px] w-[12px] lg:h-11 lg:w-19 bg-white-solid"
        />
      </button>

      <button
        onClick={handleNextClick}
        className="bg-inherit w-[40px] h-[40px] rounded-full shadow-navigation-arrow flex items-center justify-center lg:h-[60px] lg:w-[60px] "
      >
        <img
          src={rightArrow}
          alt=""
          className="h-[7px] w-[12px] lg:h-11 lg:w-19 bg-white-solid"
        />
      </button>
    </div>
  );
};

export default SliderNavigation;
