import { useState } from "react";
import { LuMessageCircle } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import LoginMess from "./LoginMess";
function MessagePack() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };

  const handleCancelBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? null : (
        <div
          className="fixed bottom-10 left-4 z-100 p-3 bg-orange-400 text-black rounded-full"
          onClick={toggleMessage}
        >
          <LuMessageCircle size={30} />
        </div>
      )}
      {isOpen && <LoginMess cancel={handleCancelBtn} />}
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
