function HotSellingPack() {
  const hotSellData = [
    {
      id: 1,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/WildlifePackageTemplate%2FRiver%20Crossing%20(2).jpg?alt=media&token=336bcd8f-6436-4b68-93fd-3b988e45c006",
      title: "Great Migration Tour (5th to 11th September 2025)",
      nd: "For 6N/7D",
      price:
        "Cost per person on twin shared accomodation - Ex Nairobi - USD 2550",
      link: "https://www.travelunbounded.com/package/wildlife/Great-Migration-Tour",
    },
    {
      id: 2,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/corbett%2Fcorbett-4.webp?alt=media&token=d6cb6842-a766-4c16-bc36-77b442583dd9",
      title: "Jim Corbett Tour Package",
      nd: "For 4N/5D",
      price: "INR 68,999/- INR 75,999PP",
      link: "https://www.travelunbounded.com/package/wildlife/Jim-Corbett",
    },
    {
      id: 3,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/kenyaKids%2Fk-3.jpg?alt=media&token=e2ad2963-58a0-4e13-9f86-1041101f6fbe",
      title: "Magical Kenya",
      nd: "For 5N/6D",
      price: "Cost per person 12-17 yrs - USD 1842 | 18+ yrs USD 1967",
      link: "https://www.travelunbounded.com/package/wildlife/magical-Kenya",
    },
  ];
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {hotSellData.map((pack) => (
          <div
            key={pack.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <img
              src={pack.imageUrl}
              alt={pack.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {pack.title}
              </h3>
              <p className="text-black font-bold text-lg p-3">{pack.nd}</p>
              <p className="text-black font-bold text-lg p-3">{pack.price}</p>
              <div className="flex flex-col gap-4 justify-center">
                <a href={pack.link} target="_blank">
                  <button className="px-4 py-2 w-full font-semibold bg-[#d4ad64] text-black rounded-lg shadow-md transition-all duration-300 hover:bg-gray-400 hover:shadow-lg">
                    View Itinerary
                  </button>
                </a>
                <button className="px-4 py-2 w-full font-semibold bg-orange-300 text-black rounded-lg shadow-md transition-all duration-300 hover:bg-green-400 hover:shadow-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotSellingPack;
