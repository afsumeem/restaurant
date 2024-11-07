import { useState } from "react";
import logo from "/src/assets/logo.svg";
import hamburger from "/src/assets/hamburger.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 w-full z-10 bg-inherit px-[30px] md:px-0">
      <div className="max-w-[1320px] mx-auto   ">
        <div className="flex basis-1/5 items-center justify-between md:justify-normal h-[108px] w-full">
          {/* logo */}

          <div className="flex items-center  gap-2 mr-[60px]">
            <img src={logo} alt="" className="h-[37px] w-[37px]" />
            <h1 className="text-[28.44px] font-semibold text-white-solid">
              Restau<span className="font-normal">rant</span>
            </h1>
          </div>

          {/* nav items */}
          <div className="hidden basis-4/5  md:flex justify-between space-x-8 items-center  ">
            <div className="flex space-x-8">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#clients">Clients</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>

            <button className="">Book a Table</button>
          </div>

          {/* hamburger */}
          <div className="md:hidden flex items-center ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-inherit focus:outline-none p-0"
            >
              <img src={hamburger} alt="hamburger-menu" className="h-6 w-6 " />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-inherit w-full ">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#home" className="block ">
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
      )}
    </nav>
  );
};

export default Header;
