import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="relative w-full h-screen">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 text-white text-2xl bg-[#00000083] bg-opacity-50 rounded-full cursor-pointer z-10 hover:bg-opacity-70"
        >
          <FaArrowLeft />
        </button>
        <img
          src={images[currentIndex]}
          alt="Slide"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <button
          onClick={nextSlide}
          className="flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 text-white text-2xl bg-[#00000083] bg-opacity-50 rounded-full cursor-pointer z-10 hover:bg-opacity-70"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
