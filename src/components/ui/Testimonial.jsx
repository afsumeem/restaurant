import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation } from "swiper/modules";
import SliderNavigation from "./SliderNavigation";
import { useEffect, useState } from "react";
import testimonialVector from "../../assets/testimonial-vector.svg";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  // fetch customer review data
  useEffect(() => {
    fetch("./customerReviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="h-[861px] lg:h-[965px] px-8 lg:px-[300px] py-[30px] lg:py-[120px]">
      <div className="w-[330px] lg:w-[1320px] mx-auto relative">
        {/* section title */}
        <div>
          <p className="section-subtitle text-base lg:text-xl leading-[26px] lg:leading-8">
            Crispy, Every Bite Taste
          </p>
          <h3 className="text-[40px] lg:text-[62px] text-about-title leading-[48px] lg:leading-[62px] pt-0 lg:pt-5 font-medium uppercase ">
            What Some of my Customers Say
          </h3>
        </div>

        {/* section content */}
        <Swiper
          loop={true}
          modules={[Navigation]}
          // spaceBetween={30}
          slidesPerView={1}
          className="mySwiper "
        >
          <SliderNavigation />
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="">
              <div className="w-[1320px] h-[555px] flex flex-col lg:flex-row-reverse bg-white-solid p-0 lg:p-8 mx-auto">
                {/* video  */}
                <div className="w-[330px] h-[240px] lg:w-[763px] lg:h-[555px]">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${review.videoId}`}
                    // frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* content */}
                <div className="bg-yellow-400 w-[330px] lg:w-[556px] relative h-[335px] lg:h-[555px] p-[25px] lg:py-[71px] lg:px-[85px] ">
                  <div className="relative h-full">
                    <p className="review-quote text-[59.93px] mb-0 pb-0 absolute -top-3 lg:top-0 left-0">
                      “
                    </p>
                    <div className="ml-[19px] lg:ml-[26.26px] pt-5 lg:pt-10">
                      {/* customer comment */}

                      <p className="flex items-start text-lg lg:text-xl leading-7 lg:leading-[34px] text-secondary-color">
                        {review.comment}
                      </p>

                      <div className="absolute bottom-0 w-full -ml-[20px] lg:ml-0">
                        {/* customer info */}
                        <div className="flex justify-between relative  border-b border-secondary-color pb-[18px]">
                          <div>
                            <h4 className="text-lg">{review.name}</h4>
                            <h5 className="text-sm">{review.address}</h5>
                          </div>
                          <img
                            src={review.image}
                            alt="customer-image"
                            className="w-[39.62px] h-[39.62px] rounded-full "
                          />
                          <div className="absolute bottom-0 right-0 w-[40.45px]  h-1 bg-border-focus"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src={testimonialVector}
                    alt=""
                    className="absolute left-0 -bottom-[8px] lg:bottom-[41.35px] w-[24px] h-[49px] lg:w-[39px] lg:h-[77px] "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
