import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function TestimonialPack() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <>
      <div className="w-full px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-left mb-6 animate-fade-in">
          Which Company is Best for Travel Agency in Bangalore?
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6 hover:text-gray-900 transition-colors duration-300">
          If you’re looking for the best travel agency in Bangalore, your search
          ends with Travel Unbounded. Known for its exceptional customer service
          and carefully curated tour packages, Travel Unbounded stands out as a
          top choice for travelers seeking memorable experiences. Whether you’re
          planning a luxury vacation, an adventure-packed journey, or a relaxing
          getaway, Travel Unbounded offers tailored solutions to meet your
          needs.
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-left mb-6 animate-fade-in">
          Why Choose Travel Unbounded?
        </h1>
        <p className="text-gray-600 mb-2 text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
          <span className="text-black font-semibold">
            1. Wide Range of Destinations:
          </span>{" "}
          From the serene backwaters of Kerala to thrilling safaris in Kenya and
          cultural tours in Vietnam, we bring you the world’s most iconic
          locations.
        </p>
        <p className="text-gray-600 mb-2 text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
          <span className="text-black font-semibold">
            2. Customized Packages:
          </span>{" "}
          We understand that every traveler is unique, which is why we offer
          personalized itineraries.
        </p>
        <p className="text-gray-600 mb-2 text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
          <span className="text-black font-semibold">
            3. Affordable Pricing:
          </span>{" "}
          With competitive pricing, we ensure that your dream vacation fits your
          budget.
        </p>
        <p className="text-gray-600 mb-2 text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
          <span className="text-black font-semibold">4. Expert Guidance:</span>{" "}
          Our team of travel experts provides 24/7 assistance, ensuring a
          hassle-free journey.
        </p>
        <p className="text-gray-600 mb-2 text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
          <span className="text-black font-semibold">
            5. Client Testimonials:{" "}
          </span>{" "}
          Hundreds of satisfied customers vouch for our professionalism and
          attention to detail.
        </p>
      </div>
      <div className="bg-white py-4 shadow-md p-6 text-left">
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl ml-2 font-bold text-gray-800 text-left mb-6 animate-fade-in">
            Frequently Asked Questions(FAQs)
          </h1>
        </div>

        <div className="space-y-6 text-left mt-6 items-start w-full bg-white shadow-lg p-8">
          <div>
            <div className="flex items-start justify-between w-ful ">
              <h1 className="text-sm md:text-lg font-semibold text-gray-800">
                Why should I book with Travel Unbounded in Bangalore?
              </h1>

              <button
                onClick={() => {
                  setIsOpen1(!isOpen1);
                }}
                className="text-gray-500 hover:text-gray-800 text-2xl font-bold"
              >
                {isOpen1 ? (
                  <FaMinus className="font-bold md:text-2xl text-black" />
                ) : (
                  <FaPlus className="font-bold md:text-2xl text-black" />
                )}
              </button>
            </div>

            {isOpen1 && (
              <p className="mt-4 text-sm md:text-base text-gray-600">
                We offer exclusive packages, expert travel advice, and
                unbeatable customer support to make your trip unforgettable.
              </p>
            )}

            <hr className="mt-4 border-gray-300" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-lg font-semibold text-gray-800">
                Does Travel Unbounded provide international tour packages?
              </p>

              <button
                onClick={() => {
                  setIsOpen2(!isOpen2);
                }}
                className="text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                {isOpen2 ? (
                  <FaMinus className="font-bold md:text-2xl text-black" />
                ) : (
                  <FaPlus className="font-bold md:text-2xl text-black" />
                )}
              </button>
            </div>

            {isOpen2 && (
              <p className="mt-4 text-sm md:text-base text-gray-600">
                Yes, we specialize in both domestic and international travel,
                including destinations like Kenya, Vietnam, and Dubai.
              </p>
            )}

            <hr className="mt-4 border-gray-300" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-lg font-semibold text-gray-800">
                Can I customize my travel itinerary?
              </p>

              <button
                onClick={() => {
                  setIsOpen3(!isOpen3);
                }}
                className="text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                {isOpen3 ? (
                  <FaMinus className="font-bold md:text-2xl text-black" />
                ) : (
                  <FaPlus className="font-bold md:text-2xl text-black" />
                )}
              </button>
            </div>

            {isOpen3 && (
              <p className="mt-4 text-sm md:text-base text-gray-600">
                Absolutely! We design itineraries tailored to your preferences,
                ensuring a unique travel experience.
              </p>
            )}

            <hr className="mt-4 border-gray-300" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialPack;
