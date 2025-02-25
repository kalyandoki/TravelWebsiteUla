import Footer from "../components/Footer";
import HotSellingPack from "../components/HotSellingPack";
import Slider from "../components/Slider";
import WildLifePack from "../components/WildLifePack";
const wildlifePackagesImages = [
  "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/bandipur%2Fbandipur-2.webp?alt=media&token=6c730b0a-45f0-42a9-af93-8eb7ce5b5f66",
  "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/WildlifePackageTemplate%2Fk-4.webp?alt=media&token=ab628dd7-29a8-4857-b8cd-8ebbf7040227",
  "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/kenyaKids%2FKenya_Gallery_4_u7kxud_csopr3.webp?alt=media&token=917700de-4faf-45b7-9703-ac96123ea78e",
  "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/kenyaKids%2FKenya_Gallery_2_ovipcd_alo3ww.webp?alt=media&token=c44aa18a-2106-4d19-a598-f0bd73d8c5b3",
  "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/bandhavgarh%2Fban-1.webp?alt=media&token=818b9fb9-3ed6-4faf-a9a7-34d05e4b2936",
];
function WildlifePackages() {
  return (
    <div>
      <Slider images={wildlifePackagesImages} />
      <div>
        <h1 className="text-4xl font-bold text-center mt-10 text-[#d79925]">
          HOT SELLING PACKAGES
        </h1>
      </div>
      <HotSellingPack />
      <div>
        <h1 className="text-4xl font-bold text-center mt-8 text-[#d79925]">
          WILDLIFE PACKAGES
        </h1>
      </div>
      <WildLifePack />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default WildlifePackages;
