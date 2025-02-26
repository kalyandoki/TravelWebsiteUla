import { LuMessageCircle } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
function MessagePack() {
  return (
    <>
      <div className="fixed bottom-10 left-4 z-100 p-3 bg-orange-400 text-black rounded-full">
        <LuMessageCircle size={30} />
      </div>
      <a
        href="https://api.whatsapp.com/send/?phone=917483129148&text=Hi&type=phone_number&app_absent=0"
        target="_blank"
      >
        <div className="fixed bottom-10 right-4 z-100 bg-green-400 p-3 text-white font-serif font-semibold flex items-center rounded-4xl gap-1">
          <FaWhatsapp size={25} />
          Enquire Now
        </div>
      </a>
    </>
  );
}

export default MessagePack;
