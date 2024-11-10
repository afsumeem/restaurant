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
    <div className="h-auto lg:h-[965px] py-[30px] lg:py-[120px] relative overflow-hidden">
      {/* section-bg */}

      <div className="absolute -left-[130px] top-40 hidden lg:block">
        <img
          src="https://res.cloudinary.com/dghf2lzu3/image/upload/v1731246753/restaurant/sectionbg-2_yj9j5p.png"
          alt="section-bg"
          className="h-[255px] -rotate-[87deg]"
          style={{
            clipPath: "inset(48% 0 0 0)",
          }}
        />
      </div>

      {/*  section bg 2   */}

      <div className="absolute  bottom-44 -right-44  hidden lg:block">
        <img
          src="https://res.cloudinary.com/dghf2lzu3/image/upload/v1731246755/restaurant/sectionbg3_gmqe2f.png"
          alt="section-bg"
          className="w-[566px] h-[303px] rotate-[34.7deg]"
          style={{
            clipPath: "polygon(0 0, 61% 33%, 80% 72%, 90% 95%, 0 100%, 0% 50%)",
          }}
        />
      </div>

      {/*  */}
      <div className="w-[330px] lg:w-[1320px] mx-auto relative">
        {/* section title */}
        <div className="flex items-center justify-between mb-[30px] lg:mb-[60px]">
          <div>
            <p className="section-subtitle text-base lg:text-xl leading-[26px] lg:leading-8">
              Crispy, Every Bite Taste
            </p>
            <h3 className="text-[40px] lg:text-[62px] text-about-title leading-[48px] lg:leading-[62px] pt-0 lg:pt-5 font-medium uppercase ">
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
            <SwiperSlide key={index} className="">
              <div className="w-[1320px] h-[555px] flex flex-col lg:flex-row-reverse bg-white-solid p-0  my-0 lg:my-8 mx-auto">
                {/* video  */}
                <div className="w-[330px] h-[240px] lg:w-[763px] lg:h-[555px]">
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
                  className={`w-[330px] lg:w-[556px] relative h-[335px] lg:h-[555px] p-[25px] lg:py-[71px] lg:px-[85px] ${styles.testimonialContentBg}`}
                >
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
        {/*  navigation on small screens */}
        <div className="block lg:hidden mt-4">
          <SliderNavigation swiper={swiperInstance} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
