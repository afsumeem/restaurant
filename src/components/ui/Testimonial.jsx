import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/Testimonial.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation } from "swiper/modules";
import SliderNavigation from "./SliderNavigation";
import { useEffect, useState } from "react";
import testimonialVector from "../../assets/testimonial-vector.svg";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // fetch customer review data
  useEffect(() => {
    fetch("./customerReviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="h-full lg:h-[965.97px] py-[30px] lg:py-[120px] relative overflow-hidden">
      {/* section-bg */}

      <div className="absolute -left-[154px] top-[159.59px] hidden lg:block">
        <img
          src="https://res.cloudinary.com/dghf2lzu3/image/upload/v1731246753/restaurant/sectionbg-2_yj9j5p.png"
          alt="section-bg"
          className="w-[307px] h-[303px] -rotate-[87deg]"
          style={{
            clipPath: "inset(48% 0 0 0)",
          }}
        />
      </div>

      {/*  section bg 2   */}

      <div className="absolute  bottom-48 -right-44  hidden lg:block">
        <img
          src="https://res.cloudinary.com/dghf2lzu3/image/upload/v1731246755/restaurant/sectionbg3_gmqe2f.png"
          alt="section-bg"
          className="w-[566.44px] h-[303.19px] rotate-[34.7deg]"
          style={{
            clipPath: "polygon(0 0, 61% 33%, 80% 72%, 90% 95%, 0 100%, 0% 50%)",
          }}
        />
      </div>

      {/*  */}

      <div className=" w-full lg:w-[90%] xl:w-[1320px] mx-auto relative px-[30px] lg:px-0">
        {/* section title */}
        <div className="flex items-center justify-between mb-[30px] lg:mb-[60px]">
          <div>
            <p className="section-subtitle text-base lg:text-xl leading-[26px] lg:leading-8">
              Crispy, Every Bite Taste
            </p>
            <h3 className="text-[40px] lg:text-[62px] text-about-title leading-[48px] lg:leading-[62px] pt-2 lg:pt-4 font-bold uppercase ">
              What Some of my Customers Say
            </h3>
          </div>
          <div className="hidden lg:block">
            <SliderNavigation swiper={swiperInstance} />
          </div>
        </div>

        {/* section content */}
        <Swiper
          onSwiper={setSwiperInstance}
          loop={true}
          modules={[Navigation]}
          slidesPerView={1}
          className="mySwiper "
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="mb-6">
              <div className="w-full xl:w-[1320px] h-auto lg:h-[555.97px] flex flex-col lg:flex-row-reverse bg-white-solid p-0 my-0 mx-auto">
                {/* video  */}

                <div className="w-full h-[240px] lg:w-[763.6px] md:h-[300px] lg:h-[555.97px]">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${review.videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* content */}
                <div
                  className={`w-full lg:w-[556.45px] h-full md:h-[280px] lg:h-[555.70px] p-[25px] lg:p-[50px] xl:py-[71.87px] xl:px-[85.13px]  ${styles.testimonialContentBg} relative overflow-hidden`}
                >
                  <div className="relative h-full">
                    <p className="review-quote text-[59.93px] mb-0 pb-0 absolute -top-3 lg:top-0 left-0 font-normal leading-[76.57px] text-secondary-color text-center">
                      “
                    </p>
                    <div className="flex flex-col gap-10 justify-between h-full ml-[18.93px] lg:ml-[26.1px]">
                      {/* customer comment */}

                      <p className="flex items-start pt-5 text-lg lg:text-xl font-normal leading-7 lg:leading-[34px] text-secondary-color">
                        {review.comment}
                      </p>

                      <div className=" w-full -ml-[18.93px] lg:ml-0">
                        {/* customer info */}
                        <div className="flex justify-between relative  border-b border-secondary-color pb-[18px]">
                          <div>
                            <h4 className="text-secondary-color text-lg leading-[19.98px]">
                              {review.name}
                            </h4>
                            <h5 className="text-sm font-normal leading-[13.32px] text-dark-charcoal mt-[3px]">
                              {review.address}
                            </h5>
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
                  {/*  */}
                  <img
                    src={testimonialVector}
                    alt=""
                    className="absolute left-0 -bottom-[8.70px] lg:bottom-[41.35px] w-[24.64px] h-[49.29px] lg:w-[39.05px] lg:h-[76.98px] "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/*  navigation on small screens */}
        <div className="block lg:hidden  ">
          <SliderNavigation swiper={swiperInstance} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
