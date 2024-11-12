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
      <div className="max-w-[1320px] mx-auto px-7 lg:px-0">
        <div className="flex basis-1/5 items-center justify-between h-[80px]  w-full">
          {/* logo */}

          <a href="/" className="flex items-center  gap-2 mr-[60px]">
            <img src={logo} alt="" className="h-[37px] w-[37px]" />
            <p className="text-[26px] sm:text-[28px] font-medium text-white-solid siteLogo">
              Restau<span className="font-light">rant</span>
            </p>
          </a>

          {/* nav items */}
          <div className="hidden basis-4/5  lg:flex justify-between space-x-8 items-center  ">
            <div className="flex space-x-8">
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
                className="transition duration-300 ease-in-out transform  hover:scale-105 hover:shadow-lg"
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
                  className="transition duration-300 ease-in-out transform  hover:scale-105 hover:shadow-lg"
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
