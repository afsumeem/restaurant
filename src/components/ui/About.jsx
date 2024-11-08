import aboutImage from "../../assets/about.png";
import { useState } from "react";
import phoneImg from "../../assets/call.svg";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <div className="h-[1144px] lg:h-[864px] px-8 lg:px-[300px] py-[30px] lg:py-[120px]">
      <div className="w-[330px] lg:w-[1320px] mx-auto">
        {/* tab */}

        <div className="flex flex-col lg:flex-row gap-[78px] mb-[120px]">
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
                  <h3 className="text-5xl lg:text-[62px] text-about-title leading-[56px] lg:leading-[62px] pt-0 lg:pt-5 font-medium uppercase ">
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
                      <p className="text-secondaryColor text-[14px] lg:text-[18px] font-semibold">
                        +88 3426 739 485
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/*  */}
              {activeTab === "experience" && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">
                    Exceptional culinary experience and delicious food
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare non sed est cursus...
                  </p>
                  <div className="flex items-center space-x-4">
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                      About More
                    </button>
                    <div className="flex items-center space-x-2">
                      <img
                        src="/path/to/phone-icon.svg"
                        alt="Phone Icon"
                        className="h-6 w-6"
                      />
                      <p className="text-gray-700">+88 3426 739 485</p>
                    </div>
                  </div>
                </div>
              )}

              {/*  */}
              {activeTab === "contact" && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">
                    Exceptional culinary experience and delicious food
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare non sed est cursus...
                  </p>
                  <div className="flex items-center space-x-4">
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                      About More
                    </button>
                    <div className="flex items-center space-x-2">
                      <img
                        src="/path/to/phone-icon.svg"
                        alt="Phone Icon"
                        className="h-6 w-6"
                      />
                      <p className="text-gray-700">+88 3426 739 485</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/*  */}
        <div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h4>Fast delivery</h4>
              <h5>Within 30 minutes</h5>
            </div>
          </div>
          {/*  */}
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h4>Absolute dining</h4>
              <h5>Best buffet restaurant</h5>
            </div>
          </div>
          {/*
           */}
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h4>Pickup delivery</h4>
              <h5>Grab your food order</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
