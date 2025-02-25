function WildLifePack() {
  const wildLifeData = [
    {
      id: 1,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/kenyaKids%2FKenya_Gallery_4_u7kxud_csopr3.webp?alt=media&token=917700de-4faf-45b7-9703-ac96123ea78e",
      title: "Best Kenya Safari | December 19th to 23rd 2025",
      nd: "For 4N/5D",
      price: "Cost per person, Ex Nairobi - USD 2535 /- Onwards",
      link: "https://www.travelunbounded.com/package/wildlife/Kenya",
    },
    {
      id: 2,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/kenyaKids%2FKenya_Gallery_2_ovipcd_alo3ww.webp?alt=media&token=c44aa18a-2106-4d19-a598-f0bd73d8c5b3",
      title: "Kenya Luxury tour | Lentorre | Maasai Mara",
      nd: "For 5N/6D",
      price: "Cost per couple, Ex Nairobi - USD 9818 /- onwards",
      link: "https://www.travelunbounded.com/package/wildlife/Kenya-lentorre-mara",
    },
    {
      id: 3,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/corbett%2Fcorbett-1.webp?alt=media&token=a495277c-ae8d-4680-9ed8-38c35b09e367",
      title: "Corbett tour package | Jeep safari | Family vacation",
      nd: "For 3N/4D",
      price: "Cost per couple on twin sharing basis INR 87,230/- Onwards",
      link: "https://www.travelunbounded.com/package/wildlife/Corbett",
    },
    {
      id: 4,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/corbett%2Fcorbett-4.webp?alt=media&token=d6cb6842-a766-4c16-bc36-77b442583dd9",
      title: "Jim Corbett Tour Package",
      nd: "For 4N/5D",
      price: "INR 68,999/- INR 75,999PP",
      link: "https://www.travelunbounded.com/package/wildlife/Jim-Corbett",
    },
    {
      id: 5,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/bandhavgarh%2Fban-1.webp?alt=media&token=818b9fb9-3ed6-4faf-a9a7-34d05e4b2936",
      title: "Bandhavgarh Safari package | Jeep safari | Family tours",
      nd: "For 3N/4D",
      price: "Cost per couple on twin-sharing basis INR 90,285/- Onwards",
      link: "https://www.travelunbounded.com/package/wildlife/Bandhavgarh",
    },
    {
      id: 6,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/bandipur%2Fbandipur-2.webp?alt=media&token=6c730b0a-45f0-42a9-af93-8eb7ce5b5f66",
      title:
        "Bandipur tiger reserve | Jeep Safari | Van Safari | Family vacation | Tour Package | weekend package",
      nd: "For 2N/3D",
      price:
        "Price : Cost per couple on twin-sharing basis INR 35,000/- Onwards",
      link: "https://www.travelunbounded.com/package/wildlife/Bandipur",
    },
    {
      id: 7,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/kenya%2FRiver%20crossing.jpg?alt=media&token=219a3bd8-bf48-4ed0-b679-6d539b35f2cf",
      title: "Great Migration Tour - August 2025",
      nd: "7N/8D",
      price: "Cost per person - USD 2780, Ex Nairobi",
      link: "https://www.travelunbounded.com/package/wildlife/Great-Migration-Aug",
    },
    {
      id: 8,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/WildlifePackageTemplate%2FRiver%20Crossing%20(2).jpg?alt=media&token=336bcd8f-6436-4b68-93fd-3b988e45c006",
      title: "Great Migration Tour (5th to 11th September 2025)",
      nd: "For 6N/7D",
      price:
        "Cost per person on twin shared accomodation - Ex Nairobi - USD 2550",
      link: "https://www.travelunbounded.com/package/wildlife/Great-Migration-Tour",
    },
    {
      id: 9,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/kenyaKids%2Fk-3.jpg?alt=media&token=e2ad2963-58a0-4e13-9f86-1041101f6fbe",
      title: "Magical Kenya",
      nd: "For 5N/6D",
      price: "Cost per person 12-17 yrs - USD 1842 | 18+ yrs USD 1967",
      link: "https://www.travelunbounded.com/package/wildlife/magical-Kenya",
    },
    {
      id: 10,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/kabini%2Fkabini-5.webp?alt=media&token=60eb30c9-02d2-4dc1-8f98-055c9452907e",
      title:
        "Kabini Tour Package | Jeep Safari | Boat Safari | Family Vacation | Weekend Package",
      nd: "For 2N/3D",
      price: "Cost per couple on twin sharing basis INR 67,000/- Onwards",
      link: "https://www.travelunbounded.com/package/wildlife/Kabini",
    },
    {
      id: 11,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FSambhar%20corbett_copy.webp?alt=media&token=187ca14d-7f54-4261-b2c8-0e9257d978bd",
      title:
        "Pench Tiger Reserve Tours and Packages | Travel Deals | Family Trip Package",
      nd: "For 3N/4D",
      price: "Cost per couple on a twin-sharing basis INR 1,28,260/-",
      link: "https://www.travelunbounded.com/package/wildlife/Pench",
    },
    {
      id: 12,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/ranthambore%2Fr-1.webp?alt=media&token=7d9cfa7a-faf5-4f10-99bf-6ca0f7125eea",
      title:
        "Ranthambore National park safari | Best time to visit Ranthambore",
      nd: "For 3N/4D",
      price: "Cost per couple on twin sharing basis INR 1,18,065/- Onwards",
      link: "https://www.travelunbounded.com/package/wildlife/Ranthambore",
    },
    {
      id: 13,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/WildlifePackageTemplate%2Fk-4.webp?alt=media&token=ab628dd7-29a8-4857-b8cd-8ebbf7040227",
      title: "Kids to Kenya | May 15th 2025 to May 20th 2025",
      nd: "For 5N/6D",
      price: "Cost per person USD 1425/- Ex Nairobi",
      link: "https://www.travelunbounded.com/package/wildlife/kenya-kids",
    },
    {
      id: 14,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/kenyaKids%2Fk-2.webp?alt=media&token=d8038cc3-1116-405b-885e-ecc026b4d34f",
      title:
        "Kenya Safari 2025 - 6-Day Custom Wildlife Tour | Amboseli, Lake Nakuru, Masai Mara",
      nd: "For 5N/6D",
      price: "Cost per 2-pax - USD 1620/- Onwards",
      link: "https://www.travelunbounded.com/package/wildlife/kenya-summer-tour",
    },
    {
      id: 15,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2Fsatpura.webp?alt=media&token=5eab323a-69f6-45e7-afad-fc087225a241",
      title:
        "Satpura Winter Wilderness Tour Package 2025 | Jungle Safari & Tiger Sighting",
      nd: "For 3N/4D",
      price: "Cost per person (Ex Bhopal): INR 48,499/- Onwards",
      link: "https://www.travelunbounded.com/package/wildlife/satpura",
    },
    {
      id: 16,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/WildlifePackageTemplate%2FTATR%20tigress%20(1).jpg?alt=media&token=7793ad11-5dd7-4aee-aba2-8fec31eb02d8",
      title: "Wilderness Safari to Tadoba (May 15th - May 18th, 2025)",
      nd: "For 3N/4D",
      price: "Cost per person INR 45,646/- (Indian Nationals)",
      link: "",
    },
    {
      id: 17,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Africa%2Fa-1-new.jpeg?alt=media&token=92be02a0-855b-48b9-beb5-49c607d9b026",
      title: "HONEYMOON IN THE GREATER KRUGER",
      nd: "Option - 1",
      price: "Cost per person USD 4977/-",
      link: "https://www.travelunbounded.com/package/wildlife/south-africa-tour/1",
    },
    {
      id: 18,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Africa%2Fsouth-africa-banner.jpeg?alt=media&token=9d39d91e-d08a-4ee7-8f65-9dd26a021aed",
      title: "HONEYMOON IN THE GREATER KRUGER",
      nd: "Option - 2",
      price: "Cost per person USD 7588/-",
      link: "https://www.travelunbounded.com/package/wildlife/south-africa-tour/2",
    },
    {
      id: 19,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Africa%2Fa-4-1.jpeg?alt=media&token=759da0ee-3be3-410f-90f2-da141d618095",
      title: "GREATER KRUGER DISCOVERY",
      nd: "Group of 6 people",
      price: "Cost per person USD 4660/-",
      link: "https://www.travelunbounded.com/package/wildlife/south-africa-tour/3",
    },
    {
      id: 20,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Africa%2Fa-5-4.jpeg?alt=media&token=5619bfdf-b3ba-4391-97d9-8b5333d75e49",
      title: "GREATER KRUGER DISCOVERY",
      nd: "Group of 20 people",
      price: "Cost per person USD 5208/-",
      link: "https://www.travelunbounded.com/package/wildlife/south-africa-tour/4",
    },
  ];
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {wildLifeData.map((pack) => (
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

export default WildLifePack;
