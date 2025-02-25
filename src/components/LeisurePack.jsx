function LeisurePack() {
  const leisureData = [
    {
      id: 1,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/andaman%2Fpexels-nabilnaidu-10794387.webp?alt=media&token=4a5480b2-6546-4b2a-a1b4-85d96d18b7fe",
      title: "Andaman Escape",
      nd: "For 3N/4D",
      price: "Cost per person INR 18,000/- Onwards",
      link: "",
    },
    {
      id: 2,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fandaman-3.webp?alt=media&token=31a61aa8-efea-4f1c-b378-c1c821fafc77",
      title: "Andaman Vibes",
      nd: "For 4N/5D",
      price: "Cost per person INR 20,499/- Onwards",
      link: "",
    },
    {
      id: 3,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fview-2843338_1920.webp?alt=media&token=d605331c-0bad-4329-a0a5-b64cee1e3c79",
      title: "Best Vietnam tour package",
      nd: "For 3N/4D",
      price: "Cost per person USD 262/-, Ex Danang",
      link: "",
    },
    {
      id: 4,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FColourful%20Kerala.webp?alt=media&token=19700292-6762-47d1-8594-ac8a81369c36",
      title: "Colourful Kerala",
      nd: "For 3N/4D",
      price: "INR 13000/- INR 16250/-PP",
      link: "",
    },
    {
      id: 5,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FGems%20of%20%20Kerala.webp?alt=media&token=366912b1-4e6c-4926-bcd1-a6d4e5dc893a",
      title: "Gems Of Kerala",
      nd: "For 5N/6D",
      price: "Cost per person INR 19,000/- Onwards",
      link: "",
    },
    {
      id: 6,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FKerala%20Sernity%20Escape.webp?alt=media&token=37deb5d9-4609-4bfd-b7ab-d2da78e1f2df",
      title: "Kerala Serinity Escape",
      nd: "For 5N/6D",
      price: "Cost per person INR 22,000/- Onwards",
      link: "",
    },
    {
      id: 7,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FKanyakumari.webp?alt=media&token=874e80df-8c75-4c7d-9bc9-c78d3f86ffb7",
      title: "Kerala Tranquil Escape",
      nd: "For 7N/8D",
      price: "Cost per person INR 31,000/- Onwards",
      link: "",
    },
    {
      id: 8,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FJatayu.webp?alt=media&token=504eb647-acc5-4248-9050-84c1d20cf8e1",
      title: "Kerala Heritage and Nature Retreat",
      nd: "For 9N/10D",
      price: "Cost per person INR 28,000/- Onwards",
      link: "",
    },
    {
      id: 9,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FMadurai.webp?alt=media&token=1d513ec7-30f0-47ca-9eb7-3b553e2a36e6",
      title: "Kerala and Tamil Nadu Grand Tour",
      nd: "For 9N/10D",
      price: "Cost per person INR 28,000/- Onwards",
      link: "",
    },
    {
      id: 10,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/vietnam%2Fv-4.webp?alt=media&token=fa42e893-9d37-4538-ac0f-74ec4ba9c0dd",
      title: "Impressive Vietnam Tour Package",
      nd: "For 5N/6D",
      price: "Cost per person USD 536/- onwards",
      link: "",
    },
    {
      id: 11,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/vietnam%2Fv-2.webp?alt=media&token=47b0213e-906f-4058-9af3-378b10723783",
      title: "Glance of Vietnam",
      nd: "For 6N/7D",
      price: "Cost per person USD 573/- Onwards",
      link: "",
    },
    {
      id: 12,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FCityscape.webp?alt=media&token=33388a62-bf49-48f6-9a74-827a0dab719b",
      title: "Best of Vietnam Tour Package",
      nd: "For 6N/7D",
      price: "Cost per person, Ex Hanoi - USD 665, Single Supplement - USD 304",
      link: "",
    },
    {
      id: 13,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/vietnam%2Fv-1.webp?alt=media&token=91070055-73d5-4888-94b1-f96146c17d0a",
      title: "Impressive Vietnam & Cambodia",
      nd: "For 9N/10D",
      price: "Cost per person USD 970/- Onwards",
      link: "",
    },
    {
      id: 14,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2F110.webp?alt=media&token=a35b1496-8967-43ab-923e-f981a5080adf",
      title: "Essence of Nepal: Kathmandu & Janakpur Spiritual Journey",
      nd: "For 3N/4D",
      price: "Cost per person INR 29,100/- Onwards",
      link: "",
    },
    {
      id: 15,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/Iceland%2Fpexels-yaroslav-shuraev-1553960-2.webp?alt=media&token=a0d4e667-b40b-4e04-b7f4-26009473bd39",
      title: "Iceland South Coast Winter Escape: 7-Day Private Tour",
      nd: "For 6N/7D",
      price: "Cost per person in double/twin room: 378,500 ISK",
      link: "",
    },
    {
      id: 16,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/bhutan%2Fb-8.webp?alt=media&token=8505e360-a5b8-47e6-b0f6-cd673a1d361c",
      title: "Bhutan - Land of the Peaceful Dragon",
      nd: "For 4N/5D",
      price: "Cost per person INR 35,000/- Onwards",
      link: "",
    },
    {
      id: 17,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/bhutan%2Fb-5.webp?alt=media&token=bf6000cb-8943-4b9d-ad7d-62d12f82f728",
      title: "Enchanting Bhutan: 6-Day Guided Tour from Phuentsholing to Paro",
      nd: "For 5N/6D",
      price: "Cost per person INR 42,000/- Onwards",
      link: "",
    },
    {
      id: 18,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/bhutan%2Fb-6.webp?alt=media&token=2722abf8-7c7a-4ae3-9058-8453bfb4a7f6",
      title: "Discover Bhutan's Hidden Gems",
      nd: "For 6N/7D",
      price: "Cost per person INR 47,000/- Onwards",
      link: "",
    },
    {
      id: 19,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/bhutan%2Fb-9.webp?alt=media&token=4f2c1de3-dab6-491d-b618-c1641cfc73b5",
      title: "Bhutan Bliss: A Journey Through the Land of the Thunder Dragon",
      nd: "For 7N/8D",
      price: "Cost per person INR 51,000/- Onwards",
      link: "",
    },
    {
      id: 20,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/bhutan%2Fb-10.webp?alt=media&token=1e1264ce-32bd-4326-877b-ac8e408f8604",
      title: "Bhutan Adventure - Explore Land of the Peaceful Dragon",
      nd: "For 8N/9D",
      price: "Cost per person INR 59,000/- Onwards",
      link: "",
    },
    {
      id: 21,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fturkey-2.webp?alt=media&token=46e54d47-431f-481c-b1ef-3959846e6c1b",
      title: "Classic Turkey Discovery",
      nd: "For 4N/5D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 22,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2FSHN201.jpg?alt=media&token=f1e0505a-80f5-467c-b020-d26f4be18194",
      title:
        "Discover Kathmandu Valley: Cultural Treasures & Scenic Views Tour",
      nd: "For 4N/5D",
      price: "Cost per person INR 27,800/- Onwards",
      link: "",
    },
    {
      id: 23,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fmal-3.webp?alt=media&token=e18fd6ce-9f1d-4ac4-80bf-15d226292a56",
      title: "Discover Malaysia Tour",
      nd: "For 4N/5D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 24,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fswitz-2.webp?alt=media&token=8f4f6e94-6530-492e-9177-f559c9b535cf",
      title: "Discover Switzerland",
      nd: "For 4N/5D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 25,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fdubai-3.webp?alt=media&token=1577bfee-97d0-4b69-bf9e-497e0246e934",
      title: "Dubai Delight",
      nd: "For 4N/5D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 26,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fdubai-1.webp?alt=media&token=2bc4972e-dc01-4689-81a5-74a6e4ca1bdf",
      title: "Dubai Express",
      nd: "For 3N/4D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 27,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fdubai-4.webp?alt=media&token=8361a329-0b38-43c4-b598-c791e596892a",
      title: "Dubai Extravaganza",
      nd: "For 5N/6D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 28,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fneth-3.webp?alt=media&token=2e0760e5-1ef5-4737-8501-a701509800f4",
      title: "Enchanting Netherlands",
      nd: "For 5N/6D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 29,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fbali.webp?alt=media&token=e85b7772-b219-41f1-816c-d7a824f6e0cb",
      title: "Experiential Bali",
      nd: "For 6N/7D",
      price: "Cost per person INR 57,999/- Onwards",
      link: "",
    },
    {
      id: 30,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fgreece-1.webp?alt=media&token=2135b693-fa93-4dd7-b803-d27df281508b",
      title: "Greece Heritage Odyssey: Delphi, Athens & Meteora",
      nd: "For 8N/9D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 31,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fgreece-2.webp?alt=media&token=fb396b44-dc35-4ac9-a229-0edb0d1dbf67",
      title: "Greece Romance Escape: Athens & Santorini Getaway",
      nd: "For 6N/7D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 32,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fgreece-4.webp?alt=media&token=ea35bb66-ce04-4604-82f4-a57bbb7933f2",
      title: "Greek Island Explorer: Mykonos, Santorini, and Crete",
      nd: "For 9N/10D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 33,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/kerala%2F6918f46e-2d26-42d4-abb8-68587915c07b.webp?alt=media&token=3233d0fc-bb89-404c-8b0c-974d4a44c90b",
      title: "Marvelous Kerala",
      nd: "For 4N/5D",
      price: "Cost per person INR 16,000/- Onwards",
      link: "",
    },
    {
      id: 34,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FRameshwaram.webp?alt=media&token=c86fa97d-7457-4686-b30e-a53fd04770b9",
      title: "Kerala and Tamil Nadu Wonders Tour",
      nd: "For 9N/10D",
      price: "Cost per person INR 39,000/- Onwards",
      link: "",
    },
    {
      id: 35,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/bali%2Fkelingking-beach-sunset-nusa-penida-island-bali-indonesia.webp?alt=media&token=68f3b9ad-7720-4302-96d4-243c690449ac",
      title: "Majestic Bali Getaway",
      nd: "For 4N/5D",
      price: "USD 251 USD 276PP",
      link: "",
    },
    {
      id: 36,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/himachal%2Fhim-6.webp?alt=media&token=d0389c32-4360-4dac-ba50-0581fdb40840",
      title: "Majestic Shimla & Manali Adventure",
      nd: "For 5N/6D",
      price: "Cost per person INR 14,500/- Onwards",
      link: "",
    },
    {
      id: 37,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FSpiti%206N7D.webp?alt=media&token=4b1323ef-26ba-427f-a705-d511cde05319",
      title: "Spiti Valley Discovery",
      nd: "For 6N/7D",
      price: "Cost per person INR 25,900/- Onwards",
      link: "",
    },
    {
      id: 38,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FSpiti%20Leh%207N8D.webp?alt=media&token=14cbd124-5993-4e9d-8051-87bcecfc341f",
      title: "Spiti Valley Tour",
      nd: "For 7N/8D",
      price: "For 7N/8D",
      link: "",
    },
    {
      id: 39,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FLahaul%20Pangi%207N8D%20(1).webp?alt=media&token=08bd4949-a83b-407c-875e-b2c444656c5a",
      title: "Lahaul & Pangi Adventure",
      nd: "Lahaul & Pangi Adventure",
      price: "Cost per person INR 42,500/- Onwards",
      link: "",
    },
    {
      id: 40,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FLahaul%20Pangi%209N10D.webp?alt=media&token=49b68e36-802d-41ce-9fc7-f8d7f33d2138",
      title: "Lahaul & Pangi Exploration",
      nd: "For 8N/9D",
      price: "Cost per person INR 47,500/- Onwards",
      link: "",
    },
    {
      id: 41,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FSpiti%208N9D.webp?alt=media&token=90608bb7-8b92-45cd-b381-ac0737045672",
      title: "Spiti Valley Adventure",
      nd: "For 8N/9D",
      price: "For 8N/9D",
      link: "",
    },
    {
      id: 42,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FKinnaur%20Spiti%20Ladhak%2013D.webp?alt=media&token=a72f8d2a-a71d-4e85-b3cc-3553eceba4b2",
      title: "Kinnaur - Spiti – Lahaul & Ladakh Combo",
      nd: "For 12N/13D",
      price: "Cost per person INR 65,500/- Onwards",
      link: "",
    },
    {
      id: 43,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fmal-7.webp?alt=media&token=00604940-2c5f-4762-a9e1-91dcfe4e165f",
      title: "Malaysia Adventure",
      nd: "For 5N/6D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 44,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fmal-1.webp?alt=media&token=5bc84e24-8785-4593-8f41-9513feb9916f",
      title: "Malaysia Short Escape",
      nd: "For 3N/4D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 45,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FSpiti%209N%2010D.webp?alt=media&token=ed195b2e-79fd-460f-9b8a-bb4d8c602652",
      title: "Spiti Valley Expedition",
      nd: "For 9N/10D",
      price: "Cost per person INR 38,500/- Onwards",
      link: "",
    },
    {
      id: 46,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FHalong%20Bay.webp?alt=media&token=26b4b34a-3d17-494f-bd0e-15284fafb67d",
      title: "Best Vietnam Tour Package | Family Vacations | Vacation Package",
      nd: "For 5N/6D",
      price: "Price available upon request",
      link: "",
    },
    {
      id: 47,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FTunnel%20replacement%20pic.webp?alt=media&token=b3317c4d-b2d4-4394-93f0-2b60bbf31b88https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fimg-13-4.jpg?alt=media&token=b538bfb3-0d8c-4368-aa5b-95267787b7c3",
      title: "Vietnam & Cambodia Tour",
      nd: "For 8N/9D",
      price: "Price available upon request",
      link: "",
    },
    {
      id: 48,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/nepal%2Fnepal-1.webp?alt=media&token=9bc8966b-d1de-45a0-a02c-f288bdcc9212",
      title: "Nepal Highlights and Spiritual Journey",
      nd: "For 5N/6D",
      price: "Cost per person INR 58,500/- Onwards",
      link: "",
    },
    {
      id: 49,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2Fnepal-p-3.webp?alt=media&token=2446195b-709e-4288-aa7d-75b69309e4ae",
      title:
        "Pokhara & Nagarkot Tour Package - Unforgettable Himalayan Views & Cultural Experiences",
      nd: "For 5N/6D",
      price: "Cost per person INR 42,600/- Onwards",
      link: "",
    },
    {
      id: 50,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/nepal%2Fnepal-4.webp?alt=media&token=d2f34cd6-adff-425a-8d03-04b4629937a6",
      title: "Nepal Odyssey: Temples, Lakes & Wilderness",
      nd: "For 7N/8D",
      price: "Cost per person 60,250/- Onwards",
      link: "",
    },
    {
      id: 51,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fneth-1.jpg?alt=media&token=a9583435-f64a-48d6-997b-33d5395ef1ea",
      title: "Netherlands Escape",
      nd: "For 3N/4D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 52,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fneth-2.jpg?alt=media&token=097cc910-1435-423f-a116-6ee47e33a296",
      title: "Netherlands Explorer",
      nd: "For 4N/5D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 53,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fsebastien-goldberg-_0hhHG0aD9Y-unsplash.jpg?alt=media&token=1eb193ad-82b1-427b-a13d-710a4c99e9fa",
      title: "NEW ZEALAND 10 NIGHTS 11 DAYS",
      nd: "For 10N/11D",
      price:
        "Cost Per Person based on Twin or Double Sharing: USD 4262 Onwards",
      link: "",
    },
    {
      id: 54,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FScenic%20Kerala.webp?alt=media&token=66391585-57ba-4b6d-be15-78984515c88f",
      title: "Scenic Kerala Holiday",
      nd: "For 6N/7D",
      price: "Cost per person INR 25,000/- Onwards",
      link: "",
    },
    {
      id: 55,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/nepal%2Fnepal-3.webp?alt=media&token=8f281973-532d-4a0d-afd4-be10030b9e1c",
      title: "Sacred Trails of Nepal: A Spiritual & Scenic Journey",
      nd: "For 6N/7D",
      price: "Cost per person INR 72,100/- Onwards",
      link: "",
    },
    {
      id: 56,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fbali-7242256_1280.webp?alt=media&token=0b8368fd-19ad-42a7-ae52-be858c47eec9",
      title: "Serene Bali",
      nd: "For 5N/6D",
      price: "Cost per person INR 28,999/- Onwards",
      link: "",
    },
    {
      id: 57,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fsin-1.webp?alt=media&token=9f511f4a-c304-4c22-9125-00c7f33ffdd9",
      title: "Singapore City Explorer",
      nd: "For 2N/3D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 58,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fsin-3.webp?alt=media&token=a7321293-d4cb-4b2b-a5d6-2888f8ec2fb2",
      title: "Singapore Cultural Escape",
      nd: "For 3N/4D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 59,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/singapore%2Fsingapore-4339705_1280.jpg?alt=media&token=6a8a819e-08fb-4787-8cde-fcfb4c99d385",
      title: "Singapore Family Fun Adventure",
      nd: "For 4N/5D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 60,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fswitz-7.webp?alt=media&token=a40461da-906d-46c4-9a30-a792c6d90045",
      title: "Switzerland Highlights",
      nd: "For 3N/4D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 61,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fturkey-1.webp?alt=media&token=cdf32dec-d13e-48fa-8ed5-8936fccaee98",
      title: "Turkey Highlights Express Tour",
      nd: "For 3N/4D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 62,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fswitz-6.jpg?alt=media&token=05c627b5-9ad5-4e0c-a260-a5f57d17bc29",
      title: "Ultimate Switzerland Adventure",
      nd: "For 5N/6D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 63,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fturkey-3.webp?alt=media&token=9353180a-ad53-4473-98e5-87f982d28dae",
      title: "Ultimate Turkey Explorer",
      nd: "For 5N/6D",
      price: "Cost on Request",
      link: "",
    },
    {
      id: 64,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fandaman-2.webp?alt=media&token=9225c8e7-4f3f-4c74-86bd-e1ed8211939f",
      title: "Andaman Islands Exploration",
      nd: "For 5N/6D",
      price: "Cost per person INR 28,499/- Onwards",
      link: "",
    },
  ];
  return (
    <>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {leisureData.map((pack) => (
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
    </>
  );
}

export default LeisurePack;
