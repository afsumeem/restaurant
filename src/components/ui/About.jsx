import { useState } from "react";
import phoneImg from "../../assets/call.svg";
import deliveryImg from "../../assets/delivery.svg";
import diningImg from "../../assets/dining.svg";
import pickupImg from "../../assets/pickup.svg";
import aboutEllipse from "../../assets/aboutEllipse.svg";
import aboutEllipse2 from "../../assets/aboutEllipse2.svg";
import aboutEllipse3 from "../../assets/aboutEllipse3.svg";

//

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="w-full h-auto lg:h-[864px] py-[30px] lg:py-[120px] relative overflow-hidden">
      {/* section-bg */}
      <div className="absolute -right-[180px] lg:bottom-32 xl:bottom-28   hidden lg:block">
        <img
          src="https://res.cloudinary.com/dghf2lzu3/image/upload/v1731248634/restaurant/rsz_section-bg_yp23c5.png"
          alt="section-bg"
          className="h-[255px] -rotate-[24deg] "
          style={{
            clipPath: "polygon(0 0, 55% 0, 14% 100%, 0% 100%)",
          }}
        />
      </div>

      <div className="w-full lg:w-[90%] xl:w-[1320px] mx-auto px-7 lg:px-0">
        {/* tab */}

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[50] xl:gap-[78px] mb-[50px] lg:mb-[100px] xl:mb-[70px]">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dghf2lzu3/image/upload/v1731246751/restaurant/about_opijdn.png"
              alt="about-image"
              className="w-full lg:w-[800px] xl:max-w-[700px] h-[246px] sm:h-[350px] md:h-[520px] lg:h-[400px] xl:h-[500px]"
            />
            <div className="absolute top-[30px] left-6 bg-white-solid rounded-[20px] w-[128px] h-[73px] lg:w-[241px] lg:h-[136px] flex justify-between items-center gap-[5px] lg:gap-3 p-[11px] lg:p-[22px]">
              <div className="ml-[22px]">
                <img
                  src={aboutEllipse}
                  alt=""
                  className="absolute top-[14px] lg:top-6 left-[12px] lg:left-[22px] w-50px h-[50px] lg:h-[94px] lg:w-[94px]"
                />
                <img
                  src={aboutEllipse2}
                  alt=""
                  className="absolute top-[14px] lg:top-6 left-[12px] lg:left-[22px] w-50px h-[50px] lg:h-[94px] lg:w-[94px]"
                />
                <img
                  src={aboutEllipse3}
                  alt=""
                  className="absolute top-5 lg:top-9 left-[14px] lg:left-[26px] w-[9px] h-[9px] lg:w-4 lg:h-4"
                />
                <h3 className="text-[14px] lg:text-[26px] font-bold absolute top-[28px] lg:top-[50px] left-[25px] lg:left-12 count-experiences">
                  50+
                </h3>
              </div>

              {/*  */}
              <h6 className="text-[8.5px] lg:text-base leading-[12px] lg:leading-[23px] text-about-title font-semibold">
                Market <br /> Experiences
              </h6>
            </div>
          </div>

          <div className=" mt-8">
            {/* Tab Buttons */}
            <div className="flex justify-start space-x-3 sm:space-x-4 md:space-x-6 mb-6 border-b border-orange-tab">
              {/* about btn */}

              <button
                className={`py-[6px] px-4 text-[14px] capitalize ${
                  activeTab === "about"
                    ? "bg-orange-tab text-white-solid font-normal"
                    : "bg-inherit text-dark-charcoal font-medium "
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>

              {/* experience btn */}
              <button
                className={`py-[6px] px-4 text-[14px] capitalize ${
                  activeTab === "experience"
                    ? "bg-orange-tab text-white-solid font-normal "
                    : "bg-inherit text-dark-charcoal font-medium"
                }`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </button>

              {/* contact btn */}
              <button
                className={`py-[6px] px-4 text-[14px] capitalize ${
                  activeTab === "contact"
                    ? "bg-orange-tab text-white-solid font-normal "
                    : "bg-inherit text-dark-charcoal font-medium"
                }`}
                onClick={() => setActiveTab("contact")}
              >
                Contact
              </button>
            </div>

            {/* Tab Content */}
            <div className="transition-opacity duration-300">
              {activeTab === "about" && (
                <div className="animate-fadeIn">
                  <h3 className="text-[40px] lg:text-[62px] text-about-title leading-[48px] lg:leading-[62px] pt-0 lg:pt-5 font-medium uppercase ">
                    Exceptional culinary experience and delicious food
                  </h3>
                  <p className="text-dark-charcoal font-normal text-base w-full lg:w-[559px] leading-[26px] mt-6 mb-8">
                    Our restaurant brings the essence of fine dining and a cozy
                    atmosphere, where culinary art meets exceptional service.
                    Each dish is crafted with locally-sourced ingredients and
                    inspired by both traditional and contemporary recipes.
                  </p>
                  {/* tab content footer */}
                  <div className="flex items-center space-x-4 md:space-x-8">
                    <button className="transition duration-300 ease-in-out transform  hover:scale-105 hover:shadow-lg text-sm sm:text-base px-3 sm:px-6">
                      About More
                    </button>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <img
                        src={phoneImg}
                        alt="PhoneIcon"
                        className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                      />
                      <p className="text-secondary-color text-[13px] sm:text-[14px] lg:text-[18px] font-semibold">
                        +88 3426 739 485
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/*  */}
              {activeTab === "experience" && (
                <div className="animate-fadeIn">
                  <h3 className="text-[40px] lg:text-[62px] text-about-title leading-[48px] lg:leading-[62px] pt-0 lg:pt-5 font-medium uppercase ">
                    Our Culinary Journey
                  </h3>
                  <p className="text-dark-charcoal font-normal text-base w-full lg:w-[559px] leading-[26px] mt-6 mb-8">
                    Experience the artistry and passion of our chefs, bringing
                    flavors from around the world to your plate. Each dish is
                    crafted with precision and care, providing a memorable
                    dining experience. Experience the artistry and passion of
                    our chefs, bringing flavors from around the world to your
                    plate. Each dish is crafted with precision and care,
                    providing a memorable dining experience.
                  </p>
                  {/* tab content footer */}
                  <div className="flex items-center space-x-4 md:space-x-8">
                    <button className="transition duration-300 ease-in-out transform  hover:scale-105 hover:shadow-lg text-sm sm:text-base px-3 sm:px-6">
                      Learn More
                    </button>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <img
                        src={phoneImg}
                        alt="PhoneIcon"
                        className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                      />
                      <p className="text-secondary-color text-[13px] sm:text-[14px] lg:text-[18px] font-semibold">
                        +88 3426 739 485
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/*  */}
              {activeTab === "contact" && (
                <div className="animate-fadeIn">
                  <h3 className="text-[40px] lg:text-[62px] text-about-title leading-[48px] lg:leading-[62px] pt-0 lg:pt-5 font-medium uppercase ">
                    Get in Touch with Us
                  </h3>
                  <p className="text-dark-charcoal font-normal text-base w-full lg:w-[559px] leading-[26px] mt-6 mb-8">
                    We’d love to hear from you! Whether you have questions about
                    our menu, reservations, or special events, our team is here
                    to help. Reach out to us and we’ll be in touch shortly. We’d
                    love to hear from you! Whether you have questions about our
                    menu, reservations, or special events, our team is here to
                    help. Reach out to us and we’ll be in touch shortly.
                  </p>
                  {/* tab content footer */}
                  <div className="flex items-center space-x-4 md:space-x-8">
                    <button className="w-[152.8px] h-[48.2px] py-[13.6px] px-[20.4px] lg:w-[180px] lg:h-[56px] lg:py-4 text-[15.3px] lg:text-lg lg:px-6 leading-[20.4px] mt-8 lg:mt-[38px] transition duration-300 ease-in-out transform  hover:scale-105 hover:shadow-lg">
                      Contact Us
                    </button>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <img
                        src={phoneImg}
                        alt="PhoneIcon"
                        className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                      />
                      <p className="text-secondary-color text-[13px] sm:text-[14px] lg:text-[18px] font-semibold">
                        +88 3426 739 485
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/*  facilities section*/}

        <div className="flex flex-wrap justify-between gap-8">
          {/*  1*/}
          <div className="flex gap-x-4 items-center ">
            <div className="w-[70px] h-[70px] rounded-full shadow-custom-light flex items-center justify-center lg:h-[90px] lg:w-[90px] ">
              {/* image */}
              <img
                src={deliveryImg}
                alt="fast-delivery-image"
                className="h-[31px] w-[31px] lg:h-10 lg:w-10 bg-white-solid"
              />
            </div>
            {/* section content */}
            <div>
              <h4 className="text-secondary-color text-2xl lg:text-[30px] leading-9">
                Fast delivery
              </h4>
              <h5 className="text-secondary-color text-lg lg:text-xl leading-8 tracking-tighter">
                Within 30 minutes
              </h5>
            </div>
          </div>

          {/* 2 */}
          <div className="flex gap-x-4 items-center ">
            <div className="w-[70px] h-[70px] rounded-full shadow-custom-light flex items-center justify-center lg:h-[90px] lg:w-[90px] ">
              {/* image */}
              <img
                src={diningImg}
                alt="absolute dining image"
                className="h-[31px] w-[31px] lg:h-10 lg:w-10 bg-white-solid"
              />
            </div>
            {/* section-content */}
            <div>
              <h4 className="text-secondary-color text-2xl lg:text-[30px] leading-9">
                Absolute dining
              </h4>
              <h5 className="text-secondary-color text-lg lg:text-xl leading-8 tracking-tighter">
                Best buffet restaurant
              </h5>
            </div>
          </div>

          {/* 3 */}
          <div className="flex gap-x-4 items-center ">
            <div className="w-[70px] h-[70px] rounded-full shadow-custom-light flex items-center justify-center lg:h-[90px] lg:w-[90px] ">
              {/* image */}
              <img
                src={pickupImg}
                alt="pickup delivery image"
                className="h-[31px] w-[31px] lg:h-10 lg:w-10 bg-white-solid"
              />
            </div>
            {/* section content */}
            <div>
              <h4 className="text-secondary-color text-2xl lg:text-[30px] leading-9">
                Pickup delivery
              </h4>
              <h5 className="text-secondary-color text-lg lg:text-xl leading-8 tracking-tighter">
                Grab your food order
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
