function DestnationPack() {
  const DestinationData = [
    {
      id: 1,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/Iceland%2Fsutirta-budiman-kjOBqwMUnWw-unsplash.webp?alt=media&token=ff839f1a-5077-4420-bdb5-a604fd2723a2",
      title: "Kenya",
      descreption:
        "Kenya is a country of dramatic extremes and one of the most diverse places on Earth. Its open plains and dense forests, snow-capped mountains and deserts, ancient vibrant culture, and bustling modern life, along with its freshwater lakes and coral reefs, create a unique landscape found nowhere else in the world. Kenya is renowned for its savannah safaris and is often referred to as the 'Mecca of Wildlife.",
      btn: "Explore Kenya's National Parks and Wildlife",
      link: "https://www.travelunbounded.com/kenya",
    },
    {
      id: 2,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Home%2Fbridge.webp?alt=media&token=9be18ce8-3563-4205-9795-19f8fc54a322",
      title: "Vietnam",
      descreption:
        "With its rich history, vibrant culture, and breathtaking landscapes, Vietnam is one of the most popular holiday destinations in the world today. Vietnam can be visited year-round, as the weather across the country is suitable for various seasons. It is also one of the most tourist-friendly places and very affordable compared to many other countries. Vietnam is an excellent holiday destination for friends and families, offering a wide range of activities for different age groups.",
      btn: "Discover the Wonders of Vietnam",
      link: "https://www.travelunbounded.com/vietnam",
    },
    {
      id: 3,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d/o/tu-home%2Ftu-home-imgs%2Ftanzania.avif?alt=media&token=dea821f8-7080-403b-ab6d-4eed631aa15d",
      title: "Tanzania",
      descreption:
        "Known for its vast wilderness, this is one of the most sought-after wildlife destinations in the world. It is home to Africa’s highest mountain, Mount Kilimanjaro, and is famously known as the 'Land of Safaris.' Millions of wildebeests and other ungulates traverse this land during the Great Migration, crossing into Maasai Mara every year. During February, on the plains of Ndutu, these animals give birth to millions of calves, a truly spectacular sight to witness.",
      btn: "Tanzania - Cradle of Mother Nature",
      link: "https://www.travelunbounded.com/tanzania",
    },
    {
      id: 4,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Home%2FGems%20of%20%20Kerala.webp?alt=media&token=1dfb5f01-9123-41a1-8f7c-b52afa30d40b",
      title: "Kerala",
      descreption:
        "Known for its serene backwaters, lush landscapes, and beautiful beaches, Kerala offers a peaceful escape. Experience houseboat rides in Alleppey, the misty tea gardens of Munnar, and the cultural richness of its temples and festivals. The state's vibrant wildlife sanctuaries and Ayurvedic retreats also provide a rejuvenating experience for nature and wellness enthusiasts.",
      btn: "Explore Kerala's Beauty",
      link: "https://www.travelunbounded.com/kerala",
    },
    {
      id: 5,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Home%2FTiger-Bigcats-Wildsafari.webp?alt=media&token=0f3cbaa5-33b3-4668-b096-13002a236aee",
      title: "Ranthambore",
      descreption:
        "Famously known as the land of the Royal Bengal Tigers, this place has a long history of man-animal coexistence. Ranthambore National Park is one of the largest and most renowned national parks in Northern India. The park is located in the Sawai Madhopur district of southeastern Rajasthan, about 130 km from Jaipur. Once a famous hunting ground for the Maharajas of Jaipur, today Ranthambore's terrain is a major wildlife tourist attraction, drawing the attention of many wildlife photographers and nature lovers to this destination.",
      btn: "Safari Zones and Attractions",
      link: "https://www.travelunbounded.com/ranthambore",
    },
    {
      id: 6,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Home%2Fhimachal-3647248_1920.webp?alt=media&token=648aa272-17ef-4678-ab90-b878ab7779e0",
      title: "Himachal Pradesh",
      descreption:
        "A scenic Himalayan destination, Himachal Pradesh is perfect for adventure and nature lovers. Explore the charming hill towns of Shimla and Manali, trek through lush valleys, or enjoy spiritual retreats in places like Dharamshala and Spiti Valley. The state also offers thrilling activities like paragliding in Bir, river rafting in Kullu, and skiing in Solang Valley, making it an ideal getaway for thrill-seekers and peace lovers alike.",
      btn: "Explore the Beauty and Adventure",
      link: "https://www.travelunbounded.com/himachal",
    },
    {
      id: 7,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d/o/tu-home%2Ftu-home-imgs%2Fbandhavgarh.avif?alt=media&token=d4ac7304-ed95-494f-bebd-73aeaad341de",
      title: "Bandhavgarh",
      descreption:
        "Ever wondered about going on jungle drives in the 'Tiger Capital of the World'? We make that possible while ensuring your comfort both on and off the field. Tiger sightings here are more frequent and regular compared to any other tiger reserve in India, making a jungle safari here the perfect choice. With tigers in all zones, it promises to be a once-in-a-lifetime experience in the wild.",
      btn: "Bandhavgarh National Park",
      link: "https://www.travelunbounded.com/bandhavgarh",
    },
    {
      id: 8,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/Iceland%2Fpexels-julia-volk-5111058-2.webp?alt=media&token=b5ad7e67-4959-4c7f-aaa4-7c5a59da8988",
      title: "Iceland",
      descreption:
        "Iceland, the land of fire and ice, offers some of the most dramatic landscapes on Earth. From active volcanoes and geysers to vast glaciers and stunning waterfalls, Iceland's natural beauty is unmatched. Visitors can explore the Golden Circle, witness the northern lights, or relax in the geothermal Blue Lagoon. The island also boasts vibrant culture and history, with a strong connection to Norse mythology. It's a perfect destination for adventure seekers and nature lovers alike.",
      btn: "Discover Iceland",
      link: "https://www.travelunbounded.com/iceland",
    },
    {
      id: 9,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Home%2FTuskers%20from%20kenya-Wildlife%20safari%20(1%20of%201).webp?alt=media&token=44128795-9c35-4c1f-baa5-5eb9b4f53709",
      title: "Corbett",
      descreption:
        "Named after the famed hunter-turned-conservationist, Sir Edward Jim Corbett, this beautiful park lies in the lower Himalayas. The life-giving Ramganga River flows through this pristine jungle. Corbett Tiger Reserve is home to the magnificent Royal Bengal Tiger and hundreds of Asiatic elephants, which descend to the Dhikala grasslands during the summer. Visitors can also spot spotted deer, sambar, and the elusive hog deer. This is one of the best parks to experience Indian wildlife.",
      btn: "Corbett – The Land of the Roar ",
      link: "https://www.travelunbounded.com/corbett",
    },
    {
      id: 10,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/andaman%2Fpexels-nabilnaidu-10794387.webp?alt=media&token=4a5480b2-6546-4b2a-a1b4-85d96d18b7fe",
      title: "Andaman",
      descreption:
        "The Andaman Islands, located in the Bay of Bengal, are a tropical paradise with pristine white-sand beaches, crystal-clear waters, and vibrant coral reefs. Known for their rich marine biodiversity, the islands offer excellent opportunities for snorkeling, scuba diving, and water sports. Beyond the beaches, visitors can explore lush rainforests, historic sites like the Cellular Jail, and unique indigenous cultures. The Andaman Islands provide a perfect blend of adventure and relaxation for beach lovers and explorers.",
      btn: "Andaman Bliss",
      link: "https://www.travelunbounded.com/andaman",
    },
    {
      id: 11,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d/o/tu-home%2Ftu-home-imgs%2Fbandipur.avif?alt=media&token=4d754254-8dc7-474e-b7c0-5c6289f0814e",
      title: "Bandipur",
      descreption:
        "This beautiful reserve is located in Karnataka and is part of the Nilgiri Biosphere Reserve. It connects to Mudumalai and Wayanad National Parks, forming an extended part of the Nilgiri Biosphere. The park is blessed with lush greenery and offers incredible wildlife sightings. It is renowned for its tiger population, elephants, gaurs, and the diverse flora and fauna that thrive within its boundaries.",
      btn: "Discover Bandipur National Park",
      link: "https://www.travelunbounded.com/bandipur",
    },
    {
      id: 12,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/bali%2Fkelingking-beach-sunset-nusa-penida-island-bali-indonesia.webp?alt=media&token=68f3b9ad-7720-4302-96d4-243c690449ac",
      title: "Bali",
      descreption:
        "Bali, Indonesia's tropical paradise, offers breathtaking beaches, lush rice terraces, vibrant culture, and spiritual tranquility. Known for its warm hospitality, stunning temples, and world-class surfing spots, Bali is a must-visit destination for those seeking adventure, relaxation, and cultural immersion.",
      btn: "Discover the Magic of Bali",
      link: "https://www.travelunbounded.com/bali",
    },
    {
      id: 13,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d/o/tu-home%2Ftu-home-imgs%2Fkabini.avif?alt=media&token=b7dcceea-7e17-4941-9827-452210c29d2b",
      title: "Kabini",
      descreption:
        "Kabini is one of the few places where the top three predators of the subcontinent-the tiger, leopard, and wild dogs-roam freely. The forest is teeming with wildlife, including spotted deer, sambar deer, the great Indian squirrel, Indian gaur (bison), and the elusive musk deer. Kabini is also known for its rich birdlife, making it a haven for wildlife enthusiasts.",
      btn: "Explore the Wild Beauty ",
      link: "https://www.travelunbounded.com/kabini",
    },
    {
      id: 14,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/dubai%2Fdubai-1.webp?alt=media&token=0e2454d4-9391-4c24-8f6f-7377a1c78bcc",
      title: "Dubai",
      descreption:
        "Experience the glitz and glamour of Dubai, a city where modern skyscrapers meet golden deserts. Discover luxury shopping, thrilling desert safaris, and the iconic Burj Khalifa. Stroll along the stunning Dubai Marina, explore the historic Al Fahidi district, and indulge in world-class dining experiences.",
      btn: "Discover Dubai",
      link: "https://www.travelunbounded.com/dubai",
    },
    {
      id: 15,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/turkey%2Fturkey-1.webp?alt=media&token=ec6c874b-7468-412e-9a8c-d6cf0bb5d522",
      title: "Turkey",
      descreption:
        "Uncover the magic of Turkey, a land where East meets West. Explore ancient ruins, beautiful mosques, and the bustling bazaars of Istanbul. Sail through the turquoise waters of the Turkish Riviera, witness the surreal landscapes of Cappadocia, and savor mouthwatering Turkish delicacies.",
      btn: "The Land of Wonders",
      link: "https://www.travelunbounded.com/turkey",
    },
    {
      id: 16,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/singapore%2Fsin-2.webp?alt=media&token=cba51adc-ccb0-4a41-9e26-0ba95b89bf91",
      title: "Singapore",
      descreption:
        "Immerse yourself in the vibrant culture of Singapore, a city known for its lush gardens, world-class attractions, and diverse cuisine. Marvel at the futuristic Gardens by the Bay, take a stroll through Chinatown, and experience thrilling rides at Universal Studios. A perfect blend of tradition and innovation awaits you.",
      btn: "Explore the Best of Singapore",
      link: "https://www.travelunbounded.com/singapore",
    },
    {
      id: 17,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/greece%2Fgreece-2.webp?alt=media&token=d021b05e-c7b1-4b12-848a-aca3998cb102",
      title: "Greece",
      descreption:
        "Escape to Greece, the cradle of Western civilization. Stroll through whitewashed villages, marvel at ancient ruins, and relax by crystal-clear waters. From the historic Parthenon in Athens to the romantic sunsets of Santorini, Greece is a journey through time and beauty.",
      btn: "Discover Greece with Travel",
      link: "https://www.travelunbounded.com/greece",
    },
    {
      id: 18,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/switz%2Fswitz-6.webp?alt=media&token=a77e6d7b-35aa-47dc-80df-96da1ea1a285",
      title: "Switzerland",
      descreption:
        "Discover the breathtaking beauty of Switzerland, home to majestic Alps, charming villages, and serene lakes. Glide through snowy slopes in Zermatt, ride the scenic Glacier Express, and savor the finest Swiss chocolate and cheese. Switzerland is the ultimate destination for nature, adventure, and tranquility.",
      btn: "Discover Switzerland",
      link: "https://www.travelunbounded.com/Switzerland",
    },
    {
      id: 19,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/malaysia%2Fmal-3.webp?alt=media&token=364ad6ec-dd43-4b3e-a940-ba453e8bef53",
      title: "Malaysia",
      descreption:
        "Malaysia is a land of vibrant contrasts, where ancient traditions blend seamlessly with modern wonders. From the iconic Petronas Twin Towers in Kuala Lumpur to the pristine beaches of Langkawi and the rich cultural heritage of Malacca, Malaysia offers unforgettable experiences for every traveler.",
      btn: "Discover Malaysia",
      link: "https://www.travelunbounded.com/malaysia",
    },
    {
      id: 20,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/netherland%2Fneth-1.webp?alt=media&token=ebe7984b-4b3e-434b-84f4-790033f4432a",
      title: "Netherland",
      descreption:
        "The Netherlands is a captivating destination celebrated for its charming canals, iconic windmills, and vibrant tulip fields. Known for its rich history and modern innovation, the country offers experiences like strolling through the picturesque streets of Amsterdam, exploring the enchanting Keukenhof Gardens, or cycling through idyllic countryside landscapes.",
      btn: "Explore the Netherlands",
      link: "https://www.travelunbounded.com/netherland",
    },
    {
      id: 21,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/nepal%2Fnepal-1.webp?alt=media&token=9bc8966b-d1de-45a0-a02c-f288bdcc9212",
      title: "Nepal",
      descreption:
        "Nepal, a landlocked country nestled in the Himalayas, is renowned for its stunning natural beauty, rich cultural heritage, and diverse landscapes. It shares borders with China to the north and India to the south, east, and west.",
      btn: "Discover the Wonders of Nepal",
      link: "https://www.travelunbounded.com/nepal",
    },
    {
      id: 22,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/bhutan%2Fb-6.webp?alt=media&token=2722abf8-7c7a-4ae3-9058-8453bfb4a7f6",
      title: "Bhutan",
      descreption:
        "Nestled high in the Eastern Himalayas, Bhutan is a country of breathtaking natural beauty, deep spiritual heritage, and enchanting mountain landscapes. Known for its pristine environment, vibrant festivals, and warm-hearted people, Bhutan offers travelers a unique escape into serenity and adventure.",
      btn: "Discover the Magic of Bhutan",
      link: "https://www.travelunbounded.com/bhutan",
    },
  ];
  return (
    <>
      <div className="w-full mx-auto px-4 py-8">
        {DestinationData.map((destination, index) => (
          <div
            key={destination.id}
            className={`flex flex-col md:flex-row items-center mb-6 gap-6 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } bg-gray-100`}
          >
            <img
              src={destination.imageUrl}
              alt={destination.title}
              className="w-full md:w-1/2 rounded-xl shadow-md transition-all duration-300 hover:brightness-110"
            />
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-800">
                {destination.title}
              </h3>
              <p className="text-gray-600 text-xl my-4">
                {destination.descreption}
              </p>
              <a
                href={destination.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-solid border-2 border-[#692020] text-black px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:bg-[#76d476] hover:shadow-lg active:scale-95"
              >
                {destination.btn}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DestnationPack;
