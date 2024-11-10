import { useEffect, useState } from "react";
import styles from "../../styles/PopularFoods.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation } from "swiper/modules";
import SliderNavigation from "./SliderNavigation";

//

const PopularFoods = () => {
  const [foods, setFoods] = useState([]);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // fetch food data
  useEffect(() => {
    fetch("./foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  //
  return (
    <div
      className={`${styles.popularFoodSection} h-auto lg:h-[710px]  py-[30px] lg:py-[120px] relative overflow-hidden`}
    >
      {/* section-bg */}
      <div className="absolute -left-[190px] bottom-20 hidden lg:block">
        <img
          src="https://res.cloudinary.com/dghf2lzu3/image/upload/v1731248634/restaurant/rsz_section-bg_yp23c5.png"
          alt="section-bg"
          className="h-[255px] -rotate-[72deg]"
          style={{
            clipPath: "polygon(82% 51%, 8% 100%, 100% 100%)",
          }}
        />
      </div>

      {/*  w-[330px] lg:w-[1320px]*/}
      <div className=" mx-auto relative">
        {/* section title */}

        <div className="flex items-center justify-between mb-[30px] lg:mb-[60px]">
          <div className=" ">
            <p className="section-subtitle text-base lg:text-xl leading-[26px] lg:leading-8">
              Crispy, Every Bite Taste
            </p>

            <h3 className="text-[40px] lg:text-[62px] text-about-title leading-[48px] lg:leading-[62px] pt-0 lg:pt-5 font-medium uppercase ">
              POPULAR FOOD ITEMS
            </h3>
          </div>
          <div className="hidden lg:block">
            <SliderNavigation swiper={swiperInstance} />
          </div>
        </div>
        {/*  popular food carousel*/}

        <Swiper
          onSwiper={setSwiperInstance}
          loop={true}
          modules={[Navigation]}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },

            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper "
        >
          {/* <SliderNavigation /> */}
          {foods.map((food, index) => (
            <SwiperSlide key={index} className="">
              <div className="w-[306px] h-[300px] bg-white-solid p-8 mx-auto">
                <img src={food.image} alt="" className="mx-auto" />
                <h4 className="text-center">{food.title}</h4>
                <h5 className="text-center">{food.subtitle}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Display navigation below the slider on small screens */}
        <div className="block lg:hidden mt-4">
          <SliderNavigation swiper={swiperInstance} />
        </div>
      </div>
    </div>
  );
};

export default PopularFoods;
