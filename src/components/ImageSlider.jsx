import { useRef } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const images = [
  { label: "ALL", url: "https://www.travelunbounded.com/infy-logo.jpg" },
  {
    label: "Kenya",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/kenya%2FRiver%20crossing.jpg?alt=media&token=219a3bd8-bf48-4ed0-b679-6d539b35f2cf",
  },
  {
    label: "Corbett ",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/corbett%2Fcorbett-1.webp?alt=media&token=a495277c-ae8d-4680-9ed8-38c35b09e367",
  },
  {
    label: "Bandhavgarh ",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/bandhavgarh%2Fban-1.webp?alt=media&token=818b9fb9-3ed6-4faf-a9a7-34d05e4b2936",
  },
  {
    label: "Bandipur ",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/bandipur%2Fbandipur-2.webp?alt=media&token=6c730b0a-45f0-42a9-af93-8eb7ce5b5f66",
  },
  {
    label: "Kabini ",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/kabini%2Fkabini-5.webp?alt=media&token=60eb30c9-02d2-4dc1-8f98-055c9452907e",
  },
  {
    label: "Ranthambore ",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/ranthambore%2Fr-1.webp?alt=media&token=7d9cfa7a-faf5-4f10-99bf-6ca0f7125eea",
  },
  {
    label: "Pench",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FSambhar%20corbett_copy.webp?alt=media&token=187ca14d-7f54-4261-b2c8-0e9257d978bd",
  },
  {
    label: "Tadoba ",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/WildlifePackageTemplate%2FTATR%20tigress%20(1).jpg?alt=media&token=7793ad11-5dd7-4aee-aba2-8fec31eb02d8",
  },
  {
    label: "Satpura",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2Fsatpura.webp?alt=media&token=5eab323a-69f6-45e7-afad-fc087225a241",
  },
  {
    label: "SouthAfrica",
    url: "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Africa%2Fa-1-new.jpeg?alt=media&token=92be02a0-855b-48b9-beb5-49c607d9b026",
  },
];
function ImageSliderWildLife() {
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

export default ImageSliderWildLife;
