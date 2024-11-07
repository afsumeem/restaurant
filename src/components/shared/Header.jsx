import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" shadow-lg sticky top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">Restaurant</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-800">
              About
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-800">
              Portfolio
            </a>
            <a href="#clients" className="text-gray-600 hover:text-gray-800">
              Clients
            </a>
            <a href="#blog" className="text-gray-600 hover:text-gray-800">
              Blog
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Book a Table
            </button>
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
            <a href="#home" className="block text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-600 hover:text-gray-800"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="block text-gray-600 hover:text-gray-800"
            >
              Portfolio
            </a>
            <a
              href="#clients"
              className="block text-gray-600 hover:text-gray-800"
            >
              Clients
            </a>
            <a href="#blog" className="block text-gray-600 hover:text-gray-800">
              Blog
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-gray-800"
            >
              Contact
            </a>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Book a Table
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
