import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LeisurePackages from "./Pages/LeisurePackages";
import WildlifePackages from "./Pages/WildlifePackages";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Header from "./components/Header";
import Blogs from "./Pages/Blogs";
import MessagePack from "./components/MessagePack";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="h-full">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
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
