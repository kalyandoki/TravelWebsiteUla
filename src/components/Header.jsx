import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import BookNowPopUp from "./BookNowPopUp";
import LocationPopup from "./LocationPopup";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenGo, setIsOpenGo] = useState(false);
  const [open, setOpen] = useState(false);

  function handleModelPopup() {
    setOpen(!open);
  }

  const handleCancelBtn = () => {
    setOpen(!open);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleMenuLocationSection = () => {
    setIsOpenGo(!isOpenGo);
  };

  return (
    <header className="bg-white border border-gray-100 mb-4 shadow-md shadow-[#cfb2b21a] text-black flex-nowrap h-[70px] flex items-center justify-between px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">
            <img
              src="https://www.travelunbounded.com/logo.webp"
              alt="Company Logo"
              className="h-16"
            />
          </Link>
        </div>

        <nav className="hidden font-serif text-sm md:flex space-x-6 font-semibold items-center">
          <Link
            to="/"
            className="hover:text-[#acec89] focus-within:text-[#b40d0d] transition duration-300"
          >
            HOME
          </Link>
          <div
            className="hover:text-[#211717] transition duration-300 flex items-center bottom-2"
            onClick={toggleMenuLocationSection}
          >
            DESTINATIONS
            {isOpenGo ? (
              <GoChevronUp size={30} className="font-bold" />
            ) : (
              <GoChevronDown size={30} className="font-bold" />
            )}
          </div>
          {isOpenGo && <LocationPopup />}
          <Link
            to="/Leisure-Packages"
            className="hover:text-[#acec89] focus-within:text-[#b40d0d] transition duration-300"
          >
            LEISURE PACKAGES
          </Link>
          <Link
            to="/Wildlife-Packages"
            className="hover:text-[#acec89] transition duration-300 focus-within:text-[#b40d0d]"
          >
            WILDLIFE PACKAGES
          </Link>
          <Link
            to="/Blogs"
            className="hover:text-[#acec89] focus-within:text-[#b40d0d] transition duration-300"
          >
            BLOGS
          </Link>
          <Link
            to="/About-Us"
            className="hover:text-[#acec89] focus-within:text-[#b40d0d] transition duration-300"
          >
            ABOUT US
          </Link>
          <Link
            to="/Contact-Us"
            className="hover:text-[#acec89] focus-within:text-[#b40d0d] transition duration-300"
          >
            CONTACT US
          </Link>
        </nav>

        {open ? null : (
          <div className="hidden md:block">
            <Link
              to="/"
              className="bg-orange-400 text-black px-6 py-2  font-bold text-lg hover:bg-orange-600 transition duration-300 shadow-md flex items-center justify-center font-[Lora]"
              onClick={handleModelPopup}
            >
              Book Now
            </Link>
          </div>
        )}
        {open && <BookNowPopUp cancel={handleCancelBtn} />}

        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FiX size={40} /> : <FiMenu size={40} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden font-serif text-sm bg-white shadow-md py-4 w-full absolute top-full left-0">
          <ul className="flex flex-col items-center space-y-4">
            <Link
              to="/"
              className="hover:text-[#acec89] transition duration-300 focus-within:text-[#b40d0d]"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <div
              className="hover:text-[#acec89] transition duration-300 flex items-center focus-within:text-[#b40d0d]"
              onClick={toggleMenuLocationSection}
            >
              Destinations
              {isOpenGo ? (
                <GoChevronUp size={30} className="font-bold" />
              ) : (
                <GoChevronDown size={30} className="font-bold" />
              )}
            </div>
            {isOpenGo && <LocationPopup />}
            <Link
              to="/Leisure-Packages"
              className="hover:text-[#acec89] transition duration-300 focus-within:text-[#b40d0d]"
              onClick={toggleMenu}
            >
              Leisure Packages
            </Link>
            <Link
              to="/Wildlife-Packages"
              className="hover:text-[#acec89] transition duration-300 focus-within:text-[#b40d0d]"
              onClick={toggleMenu}
            >
              Wildlife Packages
            </Link>
            <Link
              to="/Blogs"
              className="hover:text-[#acec89] transition duration-300 focus-within:text-[#b40d0d]"
              onClick={toggleMenu}
            >
              Blogs
            </Link>
            <Link
              to="/About-Us"
              className="hover:text-[#acec89] transition duration-300 focus-within:text-[#b40d0d]"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/Contact-Us"
              className="hover:text-[#acec89] transition duration-300 focus-within:text-[#b40d0d]"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            {open ? null : (
              <div onClick={handleModelPopup}>
                <Link
                  to="/"
                  className="bg-orange-400 text-black px-6 py-2  font-bold text-lg hover:bg-orange-600 transition duration-300 shadow-md flex items-center justify-center font-[Lora]"
                  onClick={toggleMenu}
                >
                  Book Now
                </Link>
              </div>
            )}

            {open && <BookNowPopUp cancel={handleCancelBtn} />}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
