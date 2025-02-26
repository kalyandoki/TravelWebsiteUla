import { useRef } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const images = [
  {
    label: "ALL",
    url: "https://www.travelunbounded.com/infy-logo.jpg",
  },
  {
    label: "Himachal",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/himachal%2Fhim-6.webp?alt=media&token=d0389c32-4360-4dac-ba50-0581fdb40840",
  },
  {
    label: "Andaman",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2Fpk-6.webp?alt=media&token=09ed993e-1c74-4bc2-9b44-1cc6b5f6c144",
  },
  {
    label: "Kanyakumari",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FKanyakumari.webp?alt=media&token=874e80df-8c75-4c7d-9bc9-c78d3f86ffb7",
  },
  {
    label: "Kerala",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FKerala%20Sernity%20Escape.webp?alt=media&token=37deb5d9-4609-4bfd-b7ab-d2da78e1f2df",
  },
  {
    label: "Vietnam",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FHalong%20Bay.webp?alt=media&token=26b4b34a-3d17-494f-bd0e-15284fafb67d",
  },
  {
    label: "Bali",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fbali-7242256_1280.webp?alt=media&token=0b8368fd-19ad-42a7-ae52-be858c47eec9",
  },
  {
    label: "Nepal",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2F110.webp?alt=media&token=a35b1496-8967-43ab-923e-f981a5080adf",
  },
  {
    label: "Bhutan",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/bhutan%2Fb-6.webp?alt=media&token=2722abf8-7c7a-4ae3-9058-8453bfb4a7f6",
  },
  {
    label: "Iceland",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/Iceland%2Fpexels-yaroslav-shuraev-1553960-2.webp?alt=media&token=a0d4e667-b40b-4e04-b7f4-26009473bd39",
  },
  {
    label: "Tanzania",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FJatayu.webp?alt=media&token=504eb647-acc5-4248-9050-84c1d20cf8e1",
  },
  {
    label: "Singapore",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fsin-3.webp?alt=media&token=a7321293-d4cb-4b2b-a5d6-2888f8ec2fb2",
  },
  {
    label: "Greece",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fgreece-4.webp?alt=media&token=ea35bb66-ce04-4604-82f4-a57bbb7933f2",
  },
  {
    label: "Turkey",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fturkey-1.webp?alt=media&token=cdf32dec-d13e-48fa-8ed5-8936fccaee98",
  },
  {
    label: "Dubai",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fdubai-1.webp?alt=media&token=2bc4972e-dc01-4689-81a5-74a6e4ca1bdf",
  },
  {
    label: "Netherland",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fneth-2.jpg?alt=media&token=097cc910-1435-423f-a116-6ee47e33a296",
  },
  {
    label: "Malaysia",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fmal-7.webp?alt=media&token=00604940-2c5f-4762-a9e1-91dcfe4e165f",
  },
  {
    label: "Switzerland",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fswitz-7.webp?alt=media&token=a40461da-906d-46c4-9a30-a792c6d90045",
  },
];

function ImageSliderLeisure() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center max-w-6xl mx-auto mt-10">
      <button
        onClick={scrollLeft}
        className="absolute left-0 z-10 p-2 bg-[green]  text-white rounded-full shadow-lg md:p-3 hover:scale-110 transition-all"
      >
        <SlArrowLeft size={12} />
      </button>

      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide p-4 scroll-smooth w-full"
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
      >
        {images.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center min-w-[150px] shadow-xl rounded-2xl"
          >
            <img
              src={item.url}
              alt={item.label}
              className="w-25 h-20 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
            <p className="mt-2 text-lg font-semibold text-gray-800">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 z-10 p-2 bg-[green]  text-white rounded-full shadow-lg md:p-3 hover:scale-110 transition-all"
      >
        <SlArrowRight size={12} />
      </button>
    </div>
  );
}

export default ImageSliderLeisure;
