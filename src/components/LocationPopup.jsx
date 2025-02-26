const locations = [
  {
    title: "India",
    places: [
      "Kerala",
      "Himachal",
      "Andaman",
      "Kabini",
      "Corbett",
      "Ranthambore",
      "Bandhavgarh",
    ],
  },
  {
    title: "International",
    places: [
      "Kenya",
      "Magical Kenya",
      "Vietnam",
      "Bali",
      "Nepal",
      "Bhutan",
      "Iceland",
      "Tanzania",
      "Singapore",
      "Greece",
      "Turkey",
      "Dubai",
      "Malaysia",
      "Switzerland",
      "Netherlands",
    ],
  },
];

const LocationPopup = () => {
  return (
    <div className="p-8 bg-gray-100 md:top-20 top-40  fixed z-202 w-full md:w-1/3 h-screen md:h-auto rounded-2xl">
      <ul>
        {locations.map((location, index) => (
          <li key={index}>
            <h1 className="text-[orange] text-center text-2xl p-4">
              {location.title}
            </h1>
            <ul className="grid grid-cols-2 gap-4 align-middle">
              {location.places.map((place, idx) => (
                <li className="hover:text-[orange]" key={idx}>
                  {place}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationPopup;
