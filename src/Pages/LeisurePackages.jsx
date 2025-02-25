import Slider from "../components/Slider";
const leisurePackagesImages = [
  "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2Fpk-6.webp?alt=media&token=09ed993e-1c74-4bc2-9b44-1cc6b5f6c144",
  "https://img.freepik.com/free-photo/trees-wild-falls-asian-saigon-famous_1417-1354.jpg?t=st=1740452605~exp=1740456205~hmac=5b23bc3dfe66342803b84c2a48c5130d3e8176bd3a4328a9ae7a1ebee89d5e14&w=1800",
  "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FKanyakumari.webp?alt=media&token=874e80df-8c75-4c7d-9bc9-c78d3f86ffb7",
  "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/andaman%2Fpexels-nabilnaidu-10794387.webp?alt=media&token=4a5480b2-6546-4b2a-a1b4-85d96d18b7fe",
  "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FKerala%20Sernity%20Escape.webp?alt=media&token=37deb5d9-4609-4bfd-b7ab-d2da78e1f2df",
];
function LeisurePackages() {
  return (
    <div>
      <Slider images={leisurePackagesImages} />
    </div>
  );
}

export default LeisurePackages;
