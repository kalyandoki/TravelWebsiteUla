import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import LeisurePackages from "./Pages/LeisurePackages";
import WildlifePackages from "./Pages/WildlifePackages";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Header from "./components/Header";
import Blogs from "./Pages/Blogs";
import MessagePack from "./components/MessagePack";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Leisure-Packages" element={<LeisurePackages />} />
        <Route path="/Wildlife-Packages" element={<WildlifePackages />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
      </Routes>
      <MessagePack />
    </div>
  );
}

export default App;
