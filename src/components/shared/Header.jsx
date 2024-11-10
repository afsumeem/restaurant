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
      if (window.scrollY > 100) {
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
      <div className="max-w-[1320px] mx-auto px-[30px] lg:px-0">
        <div className="flex basis-1/5 items-center justify-between h-[80px]  w-full">
          {/* logo */}

          <a href="/" className="flex items-center  gap-2 mr-[60px]">
            <img src={logo} alt="" className="h-[37px] w-[37px]" />
            <p className="text-[28.44px] font-medium text-white-solid siteLogo">
              Restau<span className="font-light">rant</span>
            </p>
          </a>

          {/* nav items */}
          <div className="hidden basis-4/5  lg:flex justify-between space-x-8 items-center  ">
            <div className="flex space-x-8">
              <a href="/">Home</a>
              <a href="#about">About</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#clients">Clients</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>

            <a href="#book-a-table">
              <button onClick={() => setIsOpen(false)}>Book a Table</button>
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

      {/*  */}
      {/* {isOpen && (
        <div className={`lg:hidden  w-full ${styles.navbarBG}`}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="/" className="block ">
              Home
            </a>
            <a href="#about" className="block ">
              About
            </a>
            <a href="#portfolio" className="block ">
              Portfolio
            </a>
            <a href="#clients" className="block ">
              Clients
            </a>
            <a href="#blog" className="block  ">
              Blog
            </a>
            <a href="#contact" className="block">
              Contact
            </a>
            <button>Book a Table</button>
          </div>
        </div>
      )} */}

      {/* Dropdown menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-30 flex justify-end">
          <div className={` w-full p-4 h-fit relative ${styles.navbarBG}`}>
            {/* Close button */}
            <IoMdClose
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            />

            <div className="flex flex-col space-y-4 mt-4">
              <a href="/" onClick={() => setIsOpen(false)}>
                Home
              </a>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
              <a href="#portfolio" onClick={() => setIsOpen(false)}>
                Portfolio
              </a>
              <a href="#clients" onClick={() => setIsOpen(false)}>
                Clients
              </a>
              <a href="#blog" onClick={() => setIsOpen(false)}>
                Blog
              </a>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
              <a href="#book-a-table">
                <button onClick={() => setIsOpen(false)}>Book a Table</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
