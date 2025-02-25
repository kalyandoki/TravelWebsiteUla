function BlogsList() {
  //Dummy Data 😊
  const blogData = [
    {
      id: 1,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Fbaby-lion-5173894_1280.jpg?alt=media&token=d66f9f8c-9a8f-4ca9-8b7f-b46a8293827d",
      title:
        "Why Students Should Visit Kenya: A Journey of Adventure, Learning, and Growth",
      content:
        "When it comes to travel destinations for students, Kenya offers an unparalleled mix of adventure, education, and transformative experiences.",
      link: "https://medium.com/@Travel_ub/why-students-should-visit-kenya-a-journey-of-adventure-learning-and-growth-ff1670a805b9",
    },
    {
      id: 2,
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*r1DwIdyxRaZm6Q624W0ymg.jpeg",
      title: "Nepal Travel Guide: Explore the Land of the Himalayas",
      content:
        "Nepal, a land of breathtaking landscapes, rich cultural heritage, and warm hospitality, is a dream destination for travelers worldwide.",
      link: "https://medium.com/@Travel_ub/nepal-travel-guide-explore-the-land-of-the-himalayas-c82b7483c7eb",
    },
    {
      id: 3,
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*iXeAc5n25IWGzMXHpENbuQ.jpeg",
      title:
        "Exploring Spiti Valley: The Middle Land of Monasteries, Lakes, and Adventure",
      content:
        "Nestled in the majestic Himalayas of Himachal Pradesh, Spiti Valley is a land of stark beauty, spiritual serenity, and exhilarating adventures. Known as the “Middle Land” between India and Tibet, Spiti seamlessly blends both cultures, offering travelers a unique high-altitude experience.",
      link: "https://medium.com/@Travel_ub/exploring-spiti-valley-the-middle-land-of-monasteries-lakes-and-adventure-9d760de5cb1e",
    },
    {
      id: 4,
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*BrX8A_LCA_ySjXe53qx35Q.jpeg",
      title:
        "Top Kenya Destinations: Discover the Best Places to Visit in Kenya",
      content:
        "Kenya is a top African travel destination that offers stunning wildlife, breathtaking landscapes, and rich cultural experiences.",
      link: "https://medium.com/@Travel_ub/top-kenya-destinations-discover-the-best-places-to-visit-in-kenya-613b393a7aef",
    },
    {
      id: 5,
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*j5fSqf1l7gYHFyIHbXlo-A.jpeg",
      title: "Discover the Enchanting Beauty of Kerala: God`s Own Country",
      content:
        "Introduction Kerala, often referred to as “God`s Own Country,” is a tropical paradise in South India. ",
      link: "https://medium.com/@Travel_ub/discover-the-enchanting-beauty-of-kerala-gods-own-country-89602c678dcf",
    },
    {
      id: 6,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2FGiraffe_A8I9407-Edit.jpg?alt=media&token=e25fe6a7-7a58-4fd2-a87c-78e9ca5dff8f",
      title: "Discover the Magic of Maasai Mara",
      content:
        "The Maasai Mara National Reserve, nestled in the heart of Kenya, is a sprawling savannah teeming with breathtaking landscapes, diverse wildlife, and rich cultural heritage.",
      link: "https://medium.com/@Travel_ub/discover-the-magic-of-maasai-mara-2095a35b95d0",
    },
    {
      id: 7,
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*mr4Zc6k_asQtQSTuO9r5mQ.jpeg",
      title: "“Himachal Pradesh: A Tranquil Escape into Nature’s Majesty”",
      content:
        "Himachal Pradesh, known for its breathtaking landscapes, offers tourists an unrivaled experience of serene beauty.",
      link: "https://medium.com/@Travel_ub/himachal-pradesh-a-tranquil-escape-into-natures-majesty-53609b214aa5",
    },
    {
      id: 8,
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*D9PxHiv-17m90eCaczJVPw.jpeg",
      title: "Winter Travel Tips for Exploring Himachal Pradesh",
      content:
        "Himachal Pradesh, nestled in the lap of the Himalayas, transforms into a winter wonderland from November to February. ",
      link: "https://medium.com/@Travel_ub/winter-travel-tips-for-exploring-himachal-pradesh-15fba5280e24",
    },
    {
      id: 9,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Home%2FTuskers%20from%20kenya-Wildlife%20safari%20(1%20of%201).jpg?alt=media&token=37f2fcf2-0b00-429a-a305-bc27c00155c8",
      title: "Discover the Thrills of Wildlife Safari: An Ultimate Guide",
      content:
        "Are you ready to embark on an unforgettable adventure? If you’ve ever dreamed of immersing yourself in the untamed beauty of nature, a wildlife safari should be at the top of your bucket list.",
      link: "https://medium.com/@Travel_ub/discover-the-thrills-of-wildlife-safari-an-ultimate-guide-5f5309fedfa1",
    },
    {
      id: 10,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Fpexels-nikhil-1593830208-27434446.jpg?alt=media&token=d48b744d-30b0-4ce7-a277-cb597347a494",
      title: "8 Reasons Why Monsoon Is the Best Time to Visit Kerala",
      content:
        "Kerala, known as “God`s Own Country,” transforms into a lush green paradise during the monsoon season.",
      link: "https://medium.com/@Travel_ub/8-reasons-why-monsoon-is-the-best-time-to-visit-kerala-d7fb64b06d0b",
    },
    {
      id: 11,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/Tublogs%2Faranyak.webp?alt=media&token=11a1a51a-e928-423f-a9d4-859385f1fd7b",
      title:
        "“Experience the Magic of Outdoor Dining at Aranyak Resort, Bandhavgarh 🌿✨”",
      content:
        "Exploring wild paths and beyond, bringing you closer to nature with expert wildlife guides, immersive travel stories, and eco-conscious adventures.",
      link: "https://medium.com/@Travel_ub/experience-the-magic-of-outdoor-dining-at-aranyak-resort-bandhavgarh-eb3c717b1a39",
    },
    {
      id: 12,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/Tublogs%2Flock.webp?alt=media&token=78f13fbb-bb17-4328-a93d-647c70a6eeb7",
      title: "Why Travel is the Key to Unlocking the World’s Pages",
      content:
        "Traveling is more than just a journey; it’s a way to explore the world’s countless wonders.",
      link: "https://medium.com/@Travel_ub/why-travel-is-the-key-to-unlocking-the-worlds-pages-7683f3c61c6a",
    },
    {
      id: 13,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/Tublogs%2Fpexels-vishvapatel-6318160.jpg?alt=media&token=87ea8c3e-76ce-4b0b-a579-f3ae1bb31488",
      title:
        "Thrilling Off-Road Adventure: A Sunset Safari Experience in Kenya",
      content:
        "When it comes to iconic African safari destinations, Kenya stands out as one of the most sought-after travel experiences for adventure lovers and wildlife enthusiasts alike. ",
      link: "https://medium.com/@Travel_ub/thrilling-off-road-adventure-a-sunset-safari-experience-in-kenya-f2ab49f59382",
    },
    {
      id: 14,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Fhimachal.jpg?alt=media&token=cf3e6b56-65fb-4a9c-b6b7-dd29b3e7a5b5",
      title:
        "Explore the Enchanting Beauty of Himachal Pradesh: A Comprehensive Travel Guide",
      content:
        "Himachal Pradesh, nestled in the majestic Himalayas, is a treasure trove of natural beauty, adventure, and spiritual serenity.",
      link: "https://medium.com/@Travel_ub/explore-the-enchanting-beauty-of-himachal-pradesh-a-comprehensive-travel-guide-545285d727ee",
    },
    {
      id: 15,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Frajasthan-2.jpg?alt=media&token=848177a0-f005-42f9-86f3-5fe42c1b0faf",
      title: "Rajasthan: The Land of Royals and Timeless Heritage",
      content:
        "Rajasthan, the largest state of India, is a mesmerizing blend of history, culture, and natural beauty. ",
      link: "https://medium.com/@Travel_ub/rajasthan-the-land-of-royals-and-timeless-heritage-62f8dcc43ba8",
    },
    {
      id: 16,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/Tublogs%2Fboats-2835848_1280.jpg?alt=media&token=9c4a69ce-fa89-43ee-8ac7-4d1b8928d285",
      title:
        "Why You Should Visit Vietnam ?Top Reasons to Explore this Southeast Asian Gem",
      content:
        "Vietnam is one of the most captivating countries in Southeast Asia, offering a unique blend of history, culture, and natural beauty. ",
      link: "https://medium.com/@Travel_ub/why-you-should-visit-vietnam-top-reasons-to-explore-this-southeast-asian-gem-19d1aabdcc82",
    },
    {
      id: 17,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/Tublogs%2Fsalt-3344508_1280.jpg?alt=media&token=e0d02b2b-523c-46fd-8d23-1fa1dc2337f0",
      title:
        "Did you know that Vietnam is home to one of the most unique salt harvesting processes in the world?",
      content:
        "In the coastal regions of Vietnam, particularly in the central province of Ninh Thuan, salt farmers use a traditional method passed down through generations to harvest salt from the sea.",
      link: "https://medium.com/@Travel_ub/did-you-know-that-vietnam-is-home-to-one-of-the-most-unique-salt-harvesting-processes-in-the-world-588483f0eb9e",
    },
    {
      id: 18,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2F28th%20-%207pm.jpg?alt=media&token=9f558e6e-fcf2-442d-9f78-026653b21bc3",
      title: "Kenya: The Ultimate Wildlife Paradise",
      content:
        "Kenya, often referred to as the “Jewel of Africa,” is a land of breathtaking landscapes, rich cultures, and unparalleled wildlife experiences. ",
      link: "https://medium.com/@Travel_ub/kenya-the-ultimate-wildlife-paradise-ca75198ccb18",
    },
    {
      id: 19,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2FIceland.jpg?alt=media&token=34592b69-cde7-42c4-bdc4-75022dcf76a9",
      title: "Exploring the Land of Fire and Ice: Iceland",
      content:
        "Iceland, often referred to as the “Land of Fire and Ice,” is a destination like no other. ",
      link: "https://medium.com/@Travel_ub/exploring-the-land-of-fire-and-ice-iceland-58c980310287",
    },
    {
      id: 20,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2FNew%20Zealand-%20image.jpg?alt=media&token=f4e92167-b7a4-4473-8e57-68ac7266b398",
      title: "Explore the Beauty of New Zealand",
      content:
        "New Zealand, a paradise on Earth, is a land of breathtaking landscapes, vibrant cities, rich culture, and thrilling adventures.",
      link: "https://medium.com/@Travel_ub/explore-the-beauty-of-new-zealand-206f0cc5f3cf",
    },
    {
      id: 21,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2FDubai-blog.jpg?alt=media&token=80d39c24-1573-45a5-ab61-45e61c24edd1",
      title: "Discover Dubai: A Paradise of Luxury, Adventure, and Culture",
      content:
        "Dubai, the jewel of the United Arab Emirates, is a city like no other. Known for its awe-inspiring skyscrapers, world-class shopping, and thrilling desert adventures, Dubai is the ultimate travel destination.",
      link: "https://medium.com/@Travel_ub/discover-dubai-a-paradise-of-luxury-adventure-and-culture-5ccf61d8bfe2",
    },
    {
      id: 22,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Fglobe-trotter-1828079_1280.jpg?alt=media&token=f3795e7e-0881-4f37-a42f-4565a0c9d9f8",
      title:
        "“Top 10As travel continues to boom, 2024 brings with it a fresh wave of exciting destinations, each with unique attractions, stunning landscapes, and rich cultures to explore. ",
      link: "https://medium.com/@Travel_ub/top-10-trending-travel-destinations-for-2024-discover-hidden-gems-and-revamped-classics-50f1d80d30ce",
    },
    {
      id: 23,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Fjoss-woodhead-3wFRlwS91yk-unsplash.jpg?alt=media&token=5e1cad0c-e6b9-411e-ac83-bf5136fec799",
      title: "Austria: A Complete Travel Guide",
      content:
        "Austria, a landlocked country in Central Europe, is known for its breathtaking Alpine landscapes, historic cities, and rich cultural heritage.",
      link: "https://medium.com/@Travel_ub/austria-a-complete-travel-guide-7e7fe63dbe7c",
    },
    {
      id: 24,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Fsingapore-4339705_1280.jpg?alt=media&token=900850a1-2257-44ea-8f5d-a7485c9f6922",
      title: "Discover Singapore: A Complete Travel Guide",
      content:
        "Singapore, a vibrant city-state in Southeast Asia, is renowned for its modern skyline, lush greenery, and rich cultural heritage.",
      link: "https://medium.com/@Travel_ub/discover-singapore-a-complete-travel-guide-5936b1cab5f6",
    },
    {
      id: 25,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Fswitz-6.jpg?alt=media&token=258c53f4-b99f-445a-87ad-4a32faa0626d",
      title: "Exploring Switzerland: A Land of Natural Beauty and Rich Culture",
      content:
        "Switzerland, nestled in the heart of Europe, is known for its breathtaking landscapes, pristine lakes, towering mountains, and charming villages.",
      link: "https://medium.com/@Travel_ub/exploring-switzerland-a-land-of-natural-beauty-and-rich-culture-93c41fee510a",
    },
    {
      id: 26,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Fkerala-3.jpg?alt=media&token=39c54259-abdc-4e08-b93b-84dddfeed5a3",
      title: "Why Choose Kerala in Winter?",
      content:
        "When the chill of winter sets in, Kerala — fondly called “God’s Own Country” — offers the perfect retreat with its balmy weather, lush landscapes, and rich experiences. ",
      link: "https://medium.com/@Travel_ub/why-choose-kerala-in-winter-3aca1ede4f57",
    },
    {
      id: 27,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Home%2FCraig%20with%20Kili%20BG.jpg?alt=media&token=5be66650-7fcd-4035-9c40-42fb8fa64e10",
      title: "Amboseli National Park’s Iconic Gentle Giant",
      content:
        " one of Africa’s most majestic elephants, is a renowned resident of Kenya’s Amboseli National Park.",
      link: "https://medium.com/@Travel_ub/amboseli-national-parks-iconic-gentle-giant-eec32761050a",
    },
    {
      id: 28,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2FKerala%20-%20whatsapp.jpg?alt=media&token=e29021bc-0b74-47e4-be1e-c575f358f06d",
      title:
        "Discover the Enchanting Alleppey Backwaters: A Complete Travel Guide",
      content:
        "Alleppey, often referred to as the “Venice of the East,” is one of Kerala’s most breathtaking destinations. ",
      link: "https://medium.com/@Travel_ub/discover-the-enchanting-alleppey-backwaters-a-complete-travel-guide-6bef54d86bc4",
    },
    {
      id: 29,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Fvivek-kumar-7k1IKQZikSc-unsplash.jpg?alt=media&token=98d4e7f7-1b0a-4a22-b8a9-0708f8c0d3fa",
      title: "Himachal Pradesh: A Land of Natural Wonders",
      content:
        "Himachal Pradesh is a picturesque state in northern India nestled in the lap of the Himalayas.",
      link: "https://medium.com/@Travel_ub/himachal-pradesh-a-land-of-natural-wonders-9053a1dcadd6",
    },
    {
      id: 30,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2FRanthambore%20Copy.jpg?alt=media&token=ad5387f0-8a92-49f2-b82c-1d1e642b4b01",
      title: "Roaring Majesty: Exploring the Wild Heart of Ranthambore",
      content:
        "Ranthambore National Park, a name that conjures images of majestic tigers roaming amidst ancient ruins, is a wildlife enthusiast’s dream come true.",
      link: "https://medium.com/@Travel_ub/roaring-majesty-exploring-the-wild-heart-of-ranthambore-473491a1ee54",
    },
    {
      id: 31,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Fortahisar-5678553_1280.jpg?alt=media&token=a5581ca8-b251-4265-826b-213ffd31f3e3",
      title: "Turkey Travel Guide: A Land of Wonders",
      content:
        "Turkey, a country that bridges Europe and Asia, is a vibrant blend of ancient history, breathtaking landscapes, and a rich cultural heritage. ",
      link: "https://medium.com/@Travel_ub/turkey-travel-guide-a-land-of-wonders-0ec7d172f960",
    },
    {
      id: 32,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Fhappy-travel-blog.jpg?alt=media&token=a4e5adb6-232e-425f-8d03-d39dbc7d4230",
      title: "The Ultimate Guide for Smart and Happy Travellers",
      content:
        "Travel is one of the most enriching experiences in life. It broadens your horizons, introduces you to new cultures, and creates memories that last a lifetime.",
      link: "https://medium.com/@Travel_ub/the-ultimate-guide-for-smart-and-happy-travellers-315925888302",
    },
    {
      id: 33,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2FSal%20road%20tigress.jpg?alt=media&token=1165d62d-ff8e-455a-b0a9-c3196cf568d0",
      title: "Corbett: The Tale of Two Sisters",
      content:
        "In a land where the wild whispered secrets of ancient times, there dwelled a majestic tigress named Parwali.",
      link: "https://medium.com/@Travel_ub/corbett-the-tale-of-two-sisters-caeb7e240cd6",
    },
    {
      id: 34,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Fkenya-1.webp?alt=media&token=ebf5e012-9274-42b7-ac31-a55b9fae7127",
      title:
        "Explore the Wonders of South African Wildlife Tours: A Journey into Nature’s Heart",
      content:
        "South Africa is a treasure trove for wildlife enthusiasts and nature lovers, offering experiences that immerse travelers in the breathtaking diversity of African ecosystems. ",
      link: "https://medium.com/@Travel_ub/explore-the-wonders-of-south-african-wildlife-tours-a-journey-into-natures-heart-fa3f2fe01467",
    },
    {
      id: 35,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Fmostafa-meraji-PRMoteIuWbc-unsplash.jpg?alt=media&token=2c1cc4c5-0acc-47a5-b336-e8d9a3f960d3",
      title: "Discover Georgia: The Hidden Gem of the Caucasus",
      content:
        "Georgia, a small yet breathtaking country nestled between Europe and Asia, is a traveler’s dream destination.",
      link: "https://medium.com/@Travel_ub/discover-georgia-the-hidden-gem-of-the-caucasus-c4ee0ea06eb8",
    },
    {
      id: 36,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Ftianshu-liu-aqZ3UAjs_M4-unsplash.jpg?alt=media&token=70d5d5d1-4c28-4dc2-9598-6ff74282e020",
      title: "Japan Travel Guide: A Journey Through the Land of the Rising Sun",
      content:
        "Japan, an island nation in East Asia, is a land of contrasts, seamlessly blending ancient traditions with modern innovations.",
      link: "https://medium.com/@Travel_ub/japan-travel-guide-a-journey-through-the-land-of-the-rising-sun-85747f5aa43f",
    },
    {
      id: 37,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Fgreece-3.jpg?alt=media&token=bcfc43e3-9abc-4c89-856c-373d32a78769",
      title: "Explore Greece: A Journey Through History and Beauty",
      content:
        "Greece, the cradle of Western civilization, offers a unique blend of ancient history, stunning landscapes, and vibrant culture.",
      link: "https://medium.com/@Travel_ub/explore-greece-a-journey-through-history-and-beauty-1da0294dd584",
    },
    {
      id: 38,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2FSuper%20Moon%20set7J6A7540.jpg?alt=media&token=49a9dbcb-6530-4e48-9d5c-e6b402947448",
      title: "Best Destination for Family Travel: Kenya 🌍✨",
      content:
        "Are you ready to shake off the midweek blues and fuel your wanderlust? This Wednesday, we’re shining the spotlight on an unforgettable adventure that promises memories for a lifetime — our Kenya Summer Holiday Package for May 2025.",
      link: "https://medium.com/@Travel_ub/best-destination-for-family-travel-kenya-5ff8ea3615a0",
    },
    {
      id: 39,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2F15th-2.jpg?alt=media&token=41fb32d7-58a3-4557-92b0-da8d2dc8fcec",
      title: "Pench National Park: A Nature Lover’s Paradise",
      content:
        "Located in the heart of India, Pench National Park is a haven for wildlife enthusiasts, nature lovers, and adventure seekers. ",
      link: "https://medium.com/@Travel_ub/pench-national-park-a-nature-lovers-paradise-bb8a94959bb4",
    },
    {
      id: 40,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Fkerala-4928799_1920.jpg?alt=media&token=4fe6947c-814f-42fc-a2cb-37b6ad0e0e8a",
      title:
        "Travel Packages for Kerala: Discover the Best Deals for God’s Own Country",
      content:
        "Kerala, fondly known as “God’s Own Country,” is a paradise for travelers seeking tranquil backwaters, lush green hills, and vibrant culture. ",
      link: "https://medium.com/@Travel_ub/travel-packages-for-kerala-discover-the-best-deals-for-gods-own-country-aa16b4438dfd",
    },
    {
      id: 41,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2F2%20(1).png?alt=media&token=4984b898-2ab4-4df2-8df2-e12ef2e3f8f3",
      title: "How to Plan the Perfect Kerala Tour: A Comprehensive Guide",
      content:
        "Planning a Kerala tour can be an extraordinary experience, providing the perfect blend of natural beauty, cultural heritage, and culinary delights.",
      link: "https://medium.com/@Travel_ub/how-to-plan-the-perfect-kerala-tour-a-comprehensive-guide-cfac4abd0e63",
    },
    {
      id: 42,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2FWhatsApp%20Image%202024-10-10%20at%203.49.17%20PM.jpeg?alt=media&token=b89fd225-cc16-4ca4-adb9-58e16cf1c393",
      title: "Satpura: Discover the Hidden Gem of Central India",
      content:
        "Nestled in the heart of Madhya Pradesh, Satpura National Park is a sanctuary that offers a rare and untouched wilderness experience.",
      link: "https://medium.com/@Travel_ub/satpura-discover-the-hidden-gem-of-central-india-9df77dc30ee1",
    },
    {
      id: 43,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2FMom%20n%20me_Kabini.jpg?alt=media&token=026805fe-7394-48a0-8ce1-8c715ef40d23",
      title: "Kabini: Where Wilderness Meets Luxury",
      content:
        "Nestled amidst the lush greenery of Karnataka, Kabini beckons nature lovers and wildlife enthusiasts with its captivating beauty and incredible biodiversity. ",
      link: "https://medium.com/@Travel_ub/kabini-where-wilderness-meets-luxury-9a1cb6cbe24f",
    },
    {
      id: 44,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2Fbridge.jpg?alt=media&token=60a4c0fe-ddf1-43a7-bc1b-1d0a9ea2b8ab",
      title:
        "Vietnam Travel Guide: Your Ultimate Destination for Adventure and Culture",
      content:
        "Vietnam, a land of breathtaking landscapes and rich cultural heritage, has become one of the most sought-after destinations in Southeast Asia.",
      link: "https://medium.com/@Travel_ub/vietnam-travel-guide-your-ultimate-destination-for-adventure-and-culture-75d9665823d5",
    },
    {
      id: 45,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/blogs%2FParwali%20Jr.jpg?alt=media&token=fb96cba0-fcd9-416f-bf95-06ada9810988",
      title: "Your Ultimate Guide to Exploring Jim Corbett National Park",
      content:
        "Jim Corbett National Park, nestled in the foothills of the Himalayas, is India’s first national park and a haven for wildlife enthusiasts.",
      link: "https://medium.com/@Travel_ub/your-ultimate-guide-to-exploring-jim-corbett-national-park-ed7787e3ba14",
    },
  ];
  console.log(blogData);
  return (
    <>
      <div className="p-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((blog) => (
            <li
              key={blog.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <a href={blog.link} target="_blank">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-[#b08328]">
                    {blog.title}
                  </h2>
                  <p className="text-gray-700 line-clamp-3">{blog.content}</p>
                  <a
                    href={blog.link}
                    target="_blank"
                    className="inline-block mt-4 text-[#b6995f] font-medium hover:underline transition-all duration-300"
                  >
                    Read More →
                  </a>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default BlogsList;
