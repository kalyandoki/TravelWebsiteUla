import { GiTigerHead, GiPalmTree } from "react-icons/gi";
import { LuPlaneTakeoff } from "react-icons/lu";
import { MdDashboardCustomize } from "react-icons/md";
function HomeStep2() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mt-8">
      <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95">
        <GiTigerHead
          size={40}
          className="text-orange-900 transition-all duration-300 hover:text-orange-500"
        />
        <h1 className="text-lg font-semibold text-gray-800 mt-2 transition-all duration-300 hover:text-orange-800">
          Expert Wildlife Safaris
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95">
        <GiPalmTree
          size={40}
          className="text-orange-900 transition-all duration-300 hover:text-orange-500"
        />
        <h1 className="text-lg font-semibold text-gray-800 mt-2 transition-all duration-300 hover:text-orange-800">
          Luxury Leisure Experiences
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95">
        <LuPlaneTakeoff
          size={40}
          className="text-orange-900 transition-all duration-300 hover:text-orange-500"
        />
        <h1 className="text-lg font-semibold text-gray-800 mt-2 transition-all duration-300 hover:text-orange-800">
          International & Domestic Reach
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95">
        <MdDashboardCustomize
          size={40}
          className="text-orange-900 transition-all duration-300 hover:text-orange-500"
        />
        <h1 className="text-lg font-semibold text-gray-800 mt-2 transition-all duration-300 hover:text-orange-800">
          Customized Tour Packages
        </h1>
      </div>
    </div>
  );
}

export default HomeStep2;
