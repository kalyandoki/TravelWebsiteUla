import { GiCancel } from "react-icons/gi";
function BookNowPopUp({ cancel }) {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4 z-50 animate-fade-in">
        <div className="relative bg-gray-900 text-white rounded-lg shadow-xl w-full h-full md:h-auto md:max-w-6xl p-6">
          <button
            onClick={cancel}
            className="absolute top-3 right-3 p-2 rounded-lg text-red-500 hover:text-red-700 transition-colors"
          >
            <GiCancel size={30} />
          </button>

          <h1 className="text-2xl font-semibold text-center">
            Book Your Dream Holiday Today!
          </h1>

          <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
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
              {
                label: "Stay Duration*",
                placeholder: "Enter Duration of Stay",
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

            <div className="col-span-1 md:col-span-3 flex justify-center">
              <button className="w-full md:w-1/4 bg-orange-500 text-white py-2 rounded-md font-semibold shadow-lg hover:bg-orange-600 active:scale-95 transition-all">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookNowPopUp;
