import aboutImage from "../../assets/about.png";
import { useState } from "react";
import phoneImg from "../../assets/call.svg";
import deliveryImg from "../../assets/delivery.svg";
import diningImg from "../../assets/dining.svg";
import pickupImg from "../../assets/pickup.svg";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <div className="h-[1144px] lg:h-[864px] px-8 lg:px-[300px] py-[30px] lg:py-[120px]">
      <div className="w-[330px] lg:w-[1320px] mx-auto">
        {/* tab */}

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[78px] mb-[50px] lg:mb-[120px]">
          <div>
            <img
              src={aboutImage}
              alt=""
              className="w-[330px] h-[246px] md:w-full lg:w-[617px] lg:h-[460px]"
            />
            <div>
              <h6>Market Experiences</h6>
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
