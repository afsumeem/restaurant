import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 w-full z-10 bg-inherit">
      <div className="max-w-[1320px] mx-auto   ">
        <div className="flex justify-between items-center h-[108px]">
          <div className="flex items-center gap-2">
            <img src="/src/assets/logo.svg" alt="" />
            <h1 className="text-[28.44px] font-semibold">
              Restau<span className="font-normal">rant</span>
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#clients">Clients</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <button>Book a Table</button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
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
