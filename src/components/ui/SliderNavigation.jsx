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
    <div className="navigationContainer flex justify-end mx-auto mt-4 mb-5">
      <button
        onClick={handlePrevClick}
        className="bg-inherit w-[70px] h-[70px] rounded-full shadow-custom-light flex items-center justify-center lg:h-[90px] lg:w-[90px] "
      >
        <img
          src={leftArrow}
          alt=""
          className="h-[31px] w-[31px] lg:h-10 lg:w-10 bg-white-solid"
        />
      </button>

      <button
        onClick={handleNextClick}
        className="bg-inherit w-[70px] h-[70px] rounded-full shadow-custom-light flex items-center justify-center lg:h-[90px] lg:w-[90px] "
      >
        <img
          src={rightArrow}
          alt=""
          className="h-[31px] w-[31px] lg:h-10 lg:w-10 bg-white-solid"
        />
      </button>
    </div>
  );
};

export default SliderNavigation;
