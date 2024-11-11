import styles from "../../styles/Footer.module.css";
import clock from "../../assets/clock.svg";
import call2 from "../../assets/call2.svg";
import mail from "../../assets/mail.svg";
import map from "../../assets/map.svg";
import facebook from "../../assets/facebook.svg";
import x from "../../assets/x.svg";
import instagram from "../../assets/instagram.svg";
import linkedIn from "../../assets/linkedIn.svg";

const Footer = () => {
  return (
    <div className={`${styles.footerSection} `}>
      <div
        className={`${styles.footerSection2} w-full h-auto lg:h-[719px]  py-[30px] lg:py-[120px]`}
      >
        <div className="max-w-full w-[330px] lg:w-[90%] xl:w-[1320px] mx-auto px-7 lg:px-0">
          {/* section title */}

          <h3 className="text-2xl lg:text-[40px] xl:text-[62px] text-white-solid leading-[1.2] font-medium uppercase text-center mb-8 lg:mb-12">
            We ready to have you the best dining experiences
          </h3>

          {/* section content */}
          <div>
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              {/*  opening hours*/}
              <div className="text-center ">
                <img
                  src={clock}
                  alt="clock-icon"
                  className="mx-auto h-[22.5px] w-[22.5px]"
                />
                <h4 className="text-2xl leading-9 text-white-solid tracking-wider mt-4 lg:mt-6 mb-3">
                  Opening hours
                </h4>
                <p className="text-base text-footer-text tracking-wider font-light leading-[25px] ">
                  Monday - Sunday
                  <br />
                  9:00 AM to 11:30 PM
                </p>
              </div>

              {/* lets talk */}
              <div className="text-center">
                <img
                  src={call2}
                  alt=""
                  className="mx-auto h-[22.5px] w-[22.5px]"
                />
                <h4 className=" text-2xl leading-9 text-white-solid tracking-wider mt-4 lg:mt-6 mb-3">
                  LET&apos;S TALK
                </h4>
                <p className=" text-base text-footer-text tracking-wider font-light leading-[25px] ">
                  Phone: 1-800-222-4545 <br />
                  Fax: 1-800-222-4545
                </p>
              </div>

              {/* book a table */}
              <div className="text-center">
                <img
                  src={mail}
                  alt=""
                  className="mx-auto h-[22.5px] w-[22.5px]"
                />
                <h4 className=" text-2xl leading-9 text-white-solid tracking-wider mt-4 lg:mt-6 mb-3">
                  BOOK A TABLE
                </h4>
                <p className=" text-base text-footer-text tracking-wider font-light leading-[25px] ">
                  Email: demo@website.com <br />
                  Support: support@website.com
                </p>
              </div>

              {/* our address */}
              <div className="text-center">
                <img
                  src={map}
                  alt=""
                  className="mx-auto h-[22.5px] w-[22.5px]"
                />
                <h4 className=" text-2xl leading-9 text-white-solid tracking-wider mt-4 lg:mt-6 mb-3">
                  Our Address
                </h4>
                <p className="text-base text-footer-text tracking-wider font-light leading-[25px] ">
                  123 Stree New York City , United <br /> States Of America.
                </p>
              </div>
            </div>

            {/*  */}

            {/* social icons */}
            <div className="my-[60px] lg:my-[120px] ">
              <div className="flex justify-center gap-4 lg:gap-6">
                {/* facebook icon */}
                <a
                  href="http://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <div className="border-[.83px] lg:border-[1.23px] border-white-border hover:border-[#febf00] duration-200 p-[9.92px] lg:p-[14px] w-fit rounded-full">
                    <img
                      src={facebook}
                      alt=""
                      className="w-[13.55px] h-[13.47px] lg:h-[20px] lg:w-[20.12px]  "
                    />
                  </div>
                </a>

                {/* x icon */}
                <a
                  href="http://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <div className="border-[.83px] lg:border-[1.23px] border-white-border hover:border-[#febf00] duration-200 p-[9.92px] lg:p-[14px] w-fit rounded-full">
                    <img
                      src={x}
                      alt=""
                      className="w-[13.55px] h-[13.47px] lg:h-[20px] lg:w-[20.12px]  "
                    />
                  </div>
                </a>

                {/* instagram icon */}
                <a
                  href="http://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <div className="border-[.83px] lg:border-[1.23px] border-white-border hover:border-[#febf00] duration-200 p-[9.92px] lg:p-[14px] w-fit rounded-full">
                    <img
                      src={instagram}
                      alt=""
                      className="w-[13.55px] h-[13.47px] lg:h-[20px] lg:w-[20.12px]  "
                    />
                  </div>
                </a>

                {/* linkedIn icon */}
                <a
                  href="http://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <div className="border-[.83px] lg:border-[1.23px] border-white-border hover:border-[#febf00] duration-200 p-[9.92px] lg:p-[14px] w-fit rounded-full">
                    <img
                      src={linkedIn}
                      alt=""
                      className="w-[13.55px] h-[13.47px] lg:h-[20px] lg:w-[20.12px]  "
                    />
                  </div>
                </a>
              </div>

              {/* footer text */}
              <p className="text-center text-white-solid mt-4 lg:mt-[25px] text-base lg:text-[21px] tracking-wider font-lighter lg:font-light leading-[18px] :leading-6">
                © 2023 All Rights Reserved{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
