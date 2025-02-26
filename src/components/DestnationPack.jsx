function DestnationPack() {
  const DestinationData = [
    {
      id: 1,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/Iceland%2Fsutirta-budiman-kjOBqwMUnWw-unsplash.webp?alt=media&token=ff839f1a-5077-4420-bdb5-a604fd2723a2",
      title: "Kenya",
      descreption:
        "Kenya is a country of dramatic extremes and one of the most diverse places on Earth. Its open plains and dense forests, snow-capped mountains and deserts, ancient vibrant culture, and bustling modern life, along with its freshwater lakes and coral reefs, create a unique landscape found nowhere else in the world. Kenya is renowned for its savannah safaris and is often referred to as the 'Mecca of Wildlife.",
      btn: "For 3N/4D",
      link: "https://www.example.com/nepal",
    },
    {
      id: 2,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Home%2Fbridge.webp?alt=media&token=9be18ce8-3563-4205-9795-19f8fc54a322",
      title: "Vietnam",
      descreption:
        "With its rich history, vibrant culture, and breathtaking landscapes, Vietnam is one of the most popular holiday destinations in the world today. Vietnam can be visited year-round, as the weather across the country is suitable for various seasons. It is also one of the most tourist-friendly places and very affordable compared to many other countries. Vietnam is an excellent holiday destination for friends and families, offering a wide range of activities for different age groups.",
      btn: "For 4N/5D",
      link: "https://www.example.com/thailand",
    },
    {
      id: 3,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d/o/tu-home%2Ftu-home-imgs%2Ftanzania.avif?alt=media&token=dea821f8-7080-403b-ab6d-4eed631aa15d",
      title: "Tanzania",
      descreption:
        "Known for its vast wilderness, this is one of the most sought-after wildlife destinations in the world. It is home to Africa’s highest mountain, Mount Kilimanjaro, and is famously known as the 'Land of Safaris.' Millions of wildebeests and other ungulates traverse this land during the Great Migration, crossing into Maasai Mara every year. During February, on the plains of Ndutu, these animals give birth to millions of calves, a truly spectacular sight to witness.",
      btn: "For 5N/6D",
      link: "https://www.example.com/indonesia",
    },
    {
      id: 4,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Home%2FGems%20of%20%20Kerala.webp?alt=media&token=1dfb5f01-9123-41a1-8f7c-b52afa30d40b",
      title: "Kerala",
      descreption:
        "Known for its serene backwaters, lush landscapes, and beautiful beaches, Kerala offers a peaceful escape. Experience houseboat rides in Alleppey, the misty tea gardens of Munnar, and the cultural richness of its temples and festivals. The state's vibrant wildlife sanctuaries and Ayurvedic retreats also provide a rejuvenating experience for nature and wellness enthusiasts.",
      btn: "For 6N/7D",
      link: "https://www.example.com/vietnam",
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
