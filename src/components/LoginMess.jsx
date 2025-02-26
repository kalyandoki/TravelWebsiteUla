import { GoXCircle } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";

function LoginMess({ cancel }) {
  return (
    <div className="bg-[#2a2d2da1] fixed  top-30 z-208 text-white p-4 h-auto w-1/2 flex items-center left-80 justify-center flex-col gap-4 rounded-4xl">
      <button
        onClick={cancel}
        className="absolute top-3 right-3 p-2 rounded-lg text-red-500 hover:text-red-700 transition-colors"
      >
        <GoXCircle size={30} />
      </button>
      <h1 className="text-2xl  text-center text-[red] font-bold font-serif">
        Enquire Now
      </h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {[
          { label: "Name*", placeholder: "Enter your Name", type: "text" },
          {
            label: "Email*",
            placeholder: "Enter your Email",
            type: "email",
          },
          {
            label: "Holiday Type*",
            placeholder: "Enter Holiday Type",
            type: "text",
          },
          {
            label: "Destination*",
            placeholder: "Enter Destination",
            type: "text",
          },
          {
            label: "No. of Adults*",
            placeholder: "Enter No. of Adults",
            type: "text",
          },
          {
            label: "Kids Above 5yrs*",
            placeholder: "Enter Kids Above 5yrs",
            type: "text",
          },
          {
            label: "Travel Date*",
            placeholder: "Enter Travel Date",
            type: "date",
          },
          {
            label: "Stay Preference*",
            placeholder: "Enter Stay Preference",
            type: "text",
          },
        ].map((field, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-sm font-medium">{field.label}</label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              className="w-full p-2 mt-1 rounded-md bg-white border border-gray-600 text-black focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              required
            />
          </div>
        ))}
      </form>
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <buton className="p-3 bg-orange-400 text-black rounded-2xl font-bold font-serif hover:bg-orange-600 transition duration-300 shadow-md w-1/2 text-center">
          Submit
        </buton>
        <a
          href="https://api.whatsapp.com/send/?phone=917483129148&text=Hi&type=phone_number&app_absent=0"
          target="_blank"
          className="w-full flex items-center justify-center gap-1"
        >
          <buton className="p-3 flex items-center gap-1 bg-green-600 text-white font-bold font-serif rounded-2xl hover:bg-green-600 transition duration-300 shadow-md w-1/2 text-center">
            <FaWhatsapp size={30} />
            Need Live assistence Chat Now
          </buton>
        </a>
      </div>
    </div>
  );
}

export default LoginMess;
