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
    <div>
      {/* section title */}
      <div>
        <p>Crispy, Every Bite Taste</p>
        <h3>POPULAR FOOD ITEMS</h3>
      </div>

      {/*  */}
      <SliderNavigation />
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
  );
};

export default PopularFoods;
