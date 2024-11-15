import { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";
import logo from "/src/assets/logo.svg";
import hamburger from "/src/assets/hamburger.svg";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50  transition-colors duration-300 ${
        scrolled ? styles.navbarBG : "bg-transparent"
      }`}
    >
      <div className="w-full lg:w-[90%] xl:w-[1320px] mx-auto px-[30px] lg:px-0 py-5 lg:py-[35.5px] h-[77px] lg:h-[108px] ">
        <div className="flex basis-1/5 items-center justify-between  w-full">
          {/* logo */}

          <a href="/" className="flex items-center  gap-2 mr-[60px]">
            <img
              src={logo}
              className="h-[36.99px] w-[37.01px]"
              alt="logo-img"
            />
            <p className="text-[28.44px] leading-[28.44px] font-semibold text-white-solid siteLogo">
              Restau<span className="font-normal">rant</span>
            </p>
          </a>

          {/* nav items */}
          <div className="hidden basis-4/5  lg:flex justify-between space-x-8 items-center  ">
            <div className="flex space-x-10">
              <a href="/" className={styles.navigationLink}>
                Home
              </a>
              <a href="#about" className={styles.navigationLink}>
                About
              </a>
              <a href="#portfolio" className={styles.navigationLink}>
                Portfolio
              </a>
              <a href="#clients" className={styles.navigationLink}>
                Clients
              </a>
              <a href="#blog" className={styles.navigationLink}>
                Blog
              </a>
              <a href="#contact" className={styles.navigationLink}>
                Contact
              </a>
            </div>

            <a href="#book-a-table">
              <button
                onClick={() => setIsOpen(false)}
                className="w-[157px] h-[44px] py-[10px] px-6 text-base transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-center"
              >
                Book a Table
              </button>
            </a>
          </div>

          {/* hamburger for small device*/}
          <div className="lg:hidden flex items-center justify-end ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-inherit focus:outline-none p-0"
            >
              <img src={hamburger} alt="hamburger-menu" className="h-6 w-6 " />
            </button>
          </div>
        </div>
      </div>

      {/* dropdown menu  */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-30 flex justify-end">
          <div className={` w-full p-4 h-fit relative ${styles.navbarBG}`}>
            {/* close button */}
            <IoMdClose
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl font-bold cursor-pointer"
            />

            <div className="flex flex-col space-y-4 mt-4">
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="border-b border-[#c22a22] pb-1"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="border-b border-[#c22a22] pb-1"
              >
                About
              </a>
              <a
                href="#portfolio"
                onClick={() => setIsOpen(false)}
                className="border-b border-[#c22a22] pb-1"
              >
                Portfolio
              </a>
              <a
                href="#clients"
                onClick={() => setIsOpen(false)}
                className="border-b border-[#c22a22] pb-1"
              >
                Clients
              </a>
              <a
                href="#blog"
                onClick={() => setIsOpen(false)}
                className="border-b border-[#c22a22] pb-1"
              >
                Blog
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="border-b border-[#c22a22] pb-1"
              >
                Contact
              </a>
              <a href="#book-a-table">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-[157px] h-[44px] py-[10px] px-6 text-base  transition duration-300 ease-in-out transform  hover:scale-105 hover:shadow-lg text-center"
                >
                  Book a Table
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
