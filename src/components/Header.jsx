import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white border border-gray-100 mb-4 shadow-md shadow-[#cfb2b21a] text-black flex-nowrap h-[70px] flex items-center justify-between px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <img
            src="https://www.travelunbounded.com/logo.webp"
            alt="Company Logo"
            className="h-16"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden font-serif text-sm md:flex space-x-6 font-semibold">
          <Link to="/" className="hover:text-[#b40d0d] transition duration-300">
            HOME
          </Link>
          <Link
            to="/Destination"
            className="hover:text-[#b40d0d] transition duration-300"
          >
            DESTINATIONS
          </Link>
          <Link
            to="/Leisure-Packages"
            className="hover:text-[#b40d0d] transition duration-300"
          >
            LEISURE PACKAGES
          </Link>
          <Link
            to="/Wildlife-Packages"
            className="hover:text-[#b40d0d] transition duration-300"
          >
            WILDLIFE PACKAGES
          </Link>
          <Link
            to="/Blogs"
            className="hover:text-[#b40d0d] transition duration-300"
          >
            BLOGS
          </Link>
          <Link
            to="/About-Us"
            className="hover:text-[#b40d0d] transition duration-300"
          >
            ABOUT US
          </Link>
          <Link
            to="/Contact-Us"
            className="hover:text-[#b40d0d] transition duration-300"
          >
            CONTACT US
          </Link>
        </nav>

        {/* Book Now Button */}
        <div className="hidden md:block">
          <Link
            to="/book-now"
            className="bg-orange-400 text-black px-6 py-2  font-bold text-lg hover:bg-orange-600 transition duration-300 shadow-md flex items-center justify-center font-[Lora]"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FiX size={40} /> : <FiMenu size={40} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden font-serif text-sm bg-white shadow-md py-4 w-full absolute top-full left-0">
          <ul className="flex flex-col items-center space-y-4">
            <Link
              to="/"
              className="hover:text-[#b40d0d] transition duration-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/Destination"
              className="hover:text-[#b40d0d] transition duration-300"
              onClick={toggleMenu}
            >
              Destinations
            </Link>
            <Link
              to="/Leisure-Packages"
              className="hover:text-[#b40d0d] transition duration-300"
              onClick={toggleMenu}
            >
              Leisure Packages
            </Link>
            <Link
              to="/Wildlife-Packages"
              className="hover:text-[#b40d0d] transition duration-300"
              onClick={toggleMenu}
            >
              Wildlife Packages
            </Link>
            <Link
              to="/Blogs"
              className="hover:text-[#b40d0d] transition duration-300"
              onClick={toggleMenu}
            >
              Blogs
            </Link>
            <Link
              to="/About-Us"
              className="hover:text-[#b40d0d] transition duration-300"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/Contact-Us"
              className="hover:text-[#b40d0d] transition duration-300"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <Link
              to="/book-now"
              className="bg-orange-400 text-black px-6 py-2  font-bold text-lg hover:bg-orange-600 transition duration-300 shadow-md flex items-center justify-center font-[Lora]"
              onClick={toggleMenu}
            >
              Book Now
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
