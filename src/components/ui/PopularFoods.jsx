import { useEffect, useState } from "react";

//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation } from "swiper/modules";
import SliderNavigation from "./SliderNavigation";

const PopularFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("./foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="h-[1144px] lg:h-[864px] px-8 lg:px-[300px] py-[30px] lg:py-[120px]">
      <div className="w-[330px] lg:w-[1320px] mx-auto">
        {/* section title */}
        <div className="flex items-center justify-between">
          <div>
            <div>
              <p>Crispy, Every Bite Taste</p>
            </div>

            <h3 className="text-5xl lg:text-[62px] text-about-title leading-[56px] lg:leading-[62px] pt-0 lg:pt-5 font-medium uppercase ">
              POPULAR FOOD ITEMS
            </h3>
          </div>

          {/* slider navigations */}
          <SliderNavigation />
        </div>

        {/*  popular food carousel*/}

        <Swiper
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
          }}
          className="mySwiper swiperContainer"
        >
          {foods.map((food, index) => (
            <SwiperSlide key={index} style={{ width: "25%" }} className="me-0">
              <div key={food.id}>
                <img src={food.image} alt="" />
                <h4>{food.title}</h4>
                <h5>{food.subtitle}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularFoods;
