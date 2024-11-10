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
    <div className="w-full h-auto lg:h-[864px]  py-[30px] lg:py-[120px] relative overflow-hidden">
      {/* section-bg */}
      <div className="absolute -right-[180px] bottom-20   hidden lg:block">
        <img
          src="https://res.cloudinary.com/dghf2lzu3/image/upload/v1731248634/restaurant/rsz_section-bg_yp23c5.png"
          alt="section-bg"
          className="h-[255px] -rotate-[24deg] "
          style={{
            clipPath: "polygon(0 0, 55% 0, 14% 100%, 0% 100%)",
          }}
        />
      </div>

      <div className="w-[330px] lg:w-[1320px] mx-auto">
        {/* tab */}

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[78px] mb-[50px] lg:mb-[120px]">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dghf2lzu3/image/upload/v1731246751/restaurant/about_opijdn.png"
              alt="about-image"
              className="w-[330px] h-[246px] md:w-full lg:w-[617px] lg:h-[460px]"
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
                <h3 className="text-[14px] lg:text-[26px] font-medium absolute top-[30px] lg:top-[52px] left-[30px] lg:left-14">
                  50+
                </h3>
              </div>

              {/*  */}
              <h6 className="text-[8.5px] lg:text-base leading-[12px] lg:leading-[23px] text-about-title font-semibold">
                Market <br /> Experiences
              </h6>
            </div>
          </div>

          <div className=" mx-auto mt-8">
            {/* Tab Buttons */}
            <div className="flex justify-start space-x-6 mb-6 border-b border-orange-tab">
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
                  <p className="text-dark-charcoal font-normal text-base w-[330px] lg:w-[559px] leading-[26px] mt-6 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                    odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                    sit amet consectetur adipiscing elit do eiusmod tempor
                    incididunt ut labore et dolore magna minim veniam nostrud
                    exercitation.
                  </p>
                  <div className="flex items-center space-x-8">
                    <button>About More</button>
                    <div className="flex items-center space-x-2">
                      <img src={phoneImg} alt="PhoneIcon" className="h-6 w-6" />
                      <p className="text-secondary-color text-[14px] lg:text-[18px] font-semibold">
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
                    Exceptional culinary experience and delicious food
                  </h3>
                  <p className="text-dark-charcoal font-normal text-base w-[330px] lg:w-[559px] leading-[26px] mt-6 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                    odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                    sit amet consectetur adipiscing elit do eiusmod tempor
                    incididunt ut labore et dolore magna minim veniam nostrud
                    exercitation.
                  </p>
                  <div className="flex items-center space-x-8">
                    <button>About More</button>
                    <div className="flex items-center space-x-2">
                      <img src={phoneImg} alt="PhoneIcon" className="h-6 w-6" />
                      <p className="text-secondary-color text-[14px] lg:text-[18px] font-semibold">
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
                    Exceptional culinary experience and delicious food
                  </h3>
                  <p className="text-dark-charcoal font-normal text-base w-[330px] lg:w-[559px] leading-[26px] mt-6 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                    odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                    sit amet consectetur adipiscing elit do eiusmod tempor
                    incididunt ut labore et dolore magna minim veniam nostrud
                    exercitation.
                  </p>
                  <div className="flex items-center space-x-8">
                    <button>About More</button>
                    <div className="flex items-center space-x-2">
                      <img src={phoneImg} alt="PhoneIcon" className="h-6 w-6" />
                      <p className="text-secondary-color text-[14px] lg:text-[18px] font-semibold">
                        +88 3426 739 485
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/*  */}

        <div className="flex flex-col lg:flex-row justify-between gap-8">
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
