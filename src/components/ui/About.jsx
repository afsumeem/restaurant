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
    <div className="w-full h-auto lg:h-[864px] py-8 lg:py-[120px] relative overflow-hidden">
      {/* section-bg */}
      <div className="absolute -right-[180px] lg:bottom-32 xl:bottom-28  hidden lg:block">
        <img
          src="https://res.cloudinary.com/dghf2lzu3/image/upload/v1731248634/restaurant/rsz_section-bg_yp23c5.png"
          alt="section-bg"
          className="h-[255.51px] w-[280.61px] -rotate-[24.95deg] "
          style={{
            clipPath: "polygon(0 0, 55% 0, 14% 100%, 0% 100%)",
          }}
        />
      </div>

      <div className="w-full lg:w-[90%] xl:w-[1320px] mx-auto px-[30px] lg:px-0">
        {/* tab */}

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[50] xl:gap-[79px] mb-[50px] lg:mb-[100px] xl:mb-[74px]">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dghf2lzu3/image/upload/v1731246751/restaurant/about_opijdn.png"
              alt="about-image"
              className="w-full h-full md:h-[520px] lg:h-[400px] xl:w-[617px] xl:h-[460px]"
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

          <div className="w-full  xl:w-[624px] ">
            {/* Tab Buttons */}
            <div className="flex justify-start space-x-3 sm:space-x-4 md:space-x-6 mb-8 border-b border-orange-tab w-full">
              {/* about btn */}

              <button
                className={`w-[73px] h-[36px] lg:w-[70px] lg:h-9  py-[6px] px-4 text-sm leading-6 font-medium capitalize ${
                  activeTab === "about"
                    ? "bg-orange-tab text-white-solid"
                    : "bg-inherit text-dark-charcoal"
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>

              {/* experience btn */}
              <button
                className={`h-9 w-[100px] py-[6px] px-4 text-sm leading-6 font-medium capitalize text-center ${
                  activeTab === "experience"
                    ? "bg-orange-tab text-white-solid"
                    : "bg-inherit text-dark-charcoal"
                }`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </button>

              {/* contact btn */}
              <button
                className={`w-[85px] h-[36px] lg:w-[90px] lg:h-9  py-[6px] px-4 text-sm leading-6 font-medium capitalize text-center ${
                  activeTab === "contact"
                    ? "bg-orange-tab text-white-solid"
                    : "bg-inherit text-dark-charcoal"
                }`}
                onClick={() => setActiveTab("contact")}
              >
                Contact
              </button>
            </div>

            {/* Tab Content */}
            <div className="transition-opacity duration-300">
              {activeTab === "about" && (
                <div className="animate-fadeIn w-full">
                  <h3 className="text-[40px] lg:text-[56px] xl:text-[62px] text-about-title leading-[48px] lg:leading-[62px] font-bold uppercase ">
                    Exceptional culinary experience and delicious food
                  </h3>
                  <p className="text-dark-charcoal font-normal text-base  leading-[26px] mt-[18px] mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                    odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                    sit amet consectetur elit do eiusmod tempor incididunt ut
                    labore et dolore magna minim veniam nostrud exercitation.
                  </p>
                  {/* tab content footer */}
                  <div className="flex items-center space-x-4 md:space-x-8">
                    <button className="w-[149px] h-[48px] py-3 px-6 lg:w-[161px] lg:h-[56px] lg:py-4 text-base lg:text-lg lg:px-6 leading-6  transition duration-300 ease-in-out transform  hover:scale-105 hover:shadow-lg text-center flex items-center">
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
                  <h3 className="text-[40px] lg:text-[56px] xl:text-[62px] text-about-title leading-[48px] lg:leading-[62px] font-bold uppercase ">
                    Our Culinary Journey
                  </h3>
                  <p className="text-dark-charcoal font-normal text-base  leading-[26px] mt-[18px] mb-8">
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
                    <button className="w-[149px] h-[48px] py-3 px-6 lg:w-[161px] lg:h-[56px] lg:py-4 text-base lg:text-lg lg:px-6 leading-6  transition duration-300 ease-in-out transform  hover:scale-105 hover:shadow-lg text-center flex items-center">
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
                  <h3 className="text-[40px] lg:text-[56px] xl:text-[62px] text-about-title leading-[48px] lg:leading-[62px] font-bold uppercase ">
                    Get in Touch with Us
                  </h3>
                  <p className="text-dark-charcoal font-normal text-base  leading-[26px] mt-[18px] mb-8">
                    We’d love to hear from you! Whether you have questions about
                    our menu, reservations, or special events, our team is here
                    to help. Reach out to us and we’ll be in touch shortly. We’d
                    love to hear from you! Whether you have questions about our
                    menu, reservations, or special events, our team is here to
                    help. Reach out to us and we’ll be in touch shortly.
                  </p>
                  {/* tab content footer */}
                  <div className="flex items-center space-x-4 md:space-x-8">
                    <button className="w-[149px] h-[48px] py-3 px-6 lg:w-[161px] lg:h-[56px] lg:py-4 text-base lg:text-lg lg:px-6 leading-6  transition duration-300 ease-in-out transform  hover:scale-105 hover:shadow-lg text-center flex items-center">
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
                className="h-[31.11px] w-[31.11px] lg:h-10 lg:w-10 bg-white-solid"
              />
            </div>
            {/* section content */}
            <div>
              <h4 className="text-secondary-color text-2xl lg:text-[30px] leading-9">
                Fast delivery
              </h4>
              <h5 className="text-secondary-color text-lg lg:text-xl font-normal leading-[26px] lg:leading-8 -tracking-[.15px]">
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
                className="h-[31.11px] w-[31.11px] lg:h-10 lg:w-10 bg-white-solid"
              />
            </div>
            {/* section-content */}
            <div>
              <h4 className="text-secondary-color text-2xl lg:text-[30px] leading-9">
                Absolute dining
              </h4>
              <h5 className="text-secondary-color text-lg lg:text-xl font-normal leading-[26px] lg:leading-8 -tracking-[.15px]">
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
                className="h-[31.11px] w-[31.11px] lg:h-10 lg:w-10 bg-white-solid"
              />
            </div>
            {/* section content */}
            <div>
              <h4 className="text-secondary-color text-2xl lg:text-[30px] leading-9">
                Pickup delivery
              </h4>
              <h5 className="text-secondary-color text-lg lg:text-xl font-normal leading-[26px] lg:leading-8 -tracking-[.15px]">
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
