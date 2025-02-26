import DestnationPack from "../components/DestnationPack";
import HomeStep2 from "../components/HomeStep2";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import TestimonialPack from "../components/TestimonialPack";

const homeImages = [
  "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/destinationImages%2Fandaman-1.webp?alt=media&token=e5ca94ae-80b7-43fc-988e-35c5ef2d25ba",
  "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/bhutan%2Fb-6.webp?alt=media&token=2722abf8-7c7a-4ae3-9058-8453bfb4a7f6https://img.freepik.com/premium-photo/green-moss-rotting-tree-trunk-forest_1048944-30372317.jpg",
  "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fgreece-2.webp?alt=media&token=fb396b44-dc35-4ac9-a229-0edb0d1dbf67",
  "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fmal-3.webp?alt=media&token=e18fd6ce-9f1d-4ac4-80bf-15d226292a56",
  "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fneth-3.webp?alt=media&token=2e0760e5-1ef5-4737-8501-a701509800f4",
];
function Home() {
  return (
    <div>
      <Slider images={homeImages} />
      <HomeStep2 />
      <div>
        <h1 className="text-4xl font-bold text-center mt-10 text-[#d79925]">
          DESTINATIONS
        </h1>
        <DestnationPack />
        <h1 className="text-4xl font-bold text-center mt-10 text-[#d79925]">
          TESTIMONIALS
        </h1>
        <TestimonialPack />
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
